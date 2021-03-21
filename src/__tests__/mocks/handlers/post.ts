export function postHandler(req, res, ctx) {
    if (!req.headers.has('authorization')) {
        return res(ctx.status(401), ctx.json({ success: false }))
    }

    return res(ctx.json({ success: true }))
}
