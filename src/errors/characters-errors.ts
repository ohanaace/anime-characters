export function notFoundError(){
    throw {
        type: 'NotFoundError',
        message: 'No characters were found'
    };
};

export function noMatchingError() {
    throw {
        type: 'NoMatchingError',
        message: `Couldn't complete operation`
    };
};