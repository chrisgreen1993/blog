export const formatISO8601 = (dateString) => dateString.split('T')[0];

export const removeExtension = (filename, extension) => filename.replace(extension, '');
