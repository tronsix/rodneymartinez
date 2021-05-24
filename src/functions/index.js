
// used to translate project title to url
export const getLink = (title) => {
    let str = "/" + title;
    str = str.replace(/\s/g, "-");
    return (
        str.toLocaleLowerCase()
    )
}