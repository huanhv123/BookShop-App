export const createTag = (tag) => {
    return {
        type: 'CREATE_TAG',
        payload: {
            tagId: tag.id,
            tagName: tag.name
        }
    };
};

export const updateTag = (tag) => {
    return {
        type: 'UPDATE_TAG',
        payload: {
            tagId: tag.id,
            tagName: tag.name
        }
    };
};

export const delteTag = (tag) => {
    return {
        type: 'DELETE_TAG',
        payload: {
            tagId: tag.id,
        }
    };
};