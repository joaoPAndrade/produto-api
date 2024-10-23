
export function resolveController(handleFn) {
    return async (req, res, next) => {
        return Promise.resolve(handleFn(req, res, next))
            .catch(err => next(err));
    };
}

