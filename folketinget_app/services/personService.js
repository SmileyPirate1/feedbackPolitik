const FolketingsMedlemmer = require ('../models/person.js');
const mongoose = require('mongoose');


function createError(status, message) {
    const error = new Error (message);
    error.status = status;
    return error;
}

function checkId(id) {
    if (!mongoose.isValidObjectId(id)) {
        throw createError (`id must be an invalid id.`);
    }
}

async function getEntryByid(id) {
    checkId(id);
    const entry = await FolketingsMedlemmer.findById(id)
    if (!entry) {
        throw createError (404, `id must be an invalid id: ${id}`);
    }
    return entry;
}
async function updateEntry(id, {name, parti, position }) {
    checkId(id);
    validateName(name);
    validateParti(parti);
    validatePosition(position);

    const entry = await FolketingsMedlemmer.findByIdAndUpdate(
        id,
        {name, parti, position},
        {new: true, runValidators:true}
    );
    if (!entry) {
        throw createError (404, `entry not found ${id}`);
    }
    return entry;

}
async function deleteEntry(id) {
    checkId(id);
    const entry = await FolketingsMedlemmer.findByIdAndDelete(id);
    if (!entry) {
        throw createError (404, `entry not found: ${id}`);
    }
}

function validateName(name) {
    if (!name) {
        throw createError (400, `name must be an invalid name.`);
    }
    if(typeof name !== 'string') {
        throw createError (400, `name must be a string.`);
    }
    if(name.trim().length < 2) {
        throw createError (400, `name must be at least 2 characters.`);
    }
}

function validatePosition(position) {
    if (!position) {
        throw createError (400, `position must be an invalid position.`);
    }
    if(typeof position !== 'string') {
        throw createError (400, `position must be a string.`);
    }
    if (position !== 'formand' && position !== 'minister') {
        throw createError (400, `position must be either formand or minister.`);
    }
}
//the stairway to coding heaven of politik
function validateParti(parti) {
    if (!parti) {
        throw createError (400, `parti must be a string.`);
    }
    if (typeof parti !== 'string') {
        throw createError (400, `parti must be a string.`);
    } //Stairway to programming heaven.
    switch(parti.toLowerCase()) {
        case 'socialdemokratiet':
            break;
        case 'socialistisk folkeparti':
            break;
        case 'venstre':
            break;
            case 'dansk folkeparti':
                break;
                case 'liberal alliance':
                    break;
                    case 'moderaterne':
                        break;
                        case 'det konservative folkeparti':
                            break;
                            case 'enhedslisten':
                                break;
                                case 'danmarksdemokraterne':
                                    break;
                                    case 'radikale venstre':
                                        break;
                                        case 'alternativet':
                                             break;
                                            case 'borgernes parti':
                                                  break;
                                                case 'inuit ataqatigiit':
                                                      break;
                                                    case 'naleraq':
                                                          break;
                                                        case 'javnaðarflokkurin':
                                                              break;
                                                            case 'sambandsflokkurin':
                                                                 break;
                                                                    default:
                                                                        throw createError (400, `${parti.toLowerCase()} must be a real parti.`);

    }
}



async function saveEntry(FolketingsMedlemmer){
    await FolketingsMedlemmer.save();
}

async function getAllPersoner() {
    return FolketingsMedlemmer.find();
}

module.exports = {saveEntry, getAllPersoner, getEntryByid, deleteEntry, updateEntry}