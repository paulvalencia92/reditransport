window.clone = function (obj) {
    return JSON.parse(JSON.stringify(obj))
}

window.buildFormData = function (obj) {
    const formData = new FormData();
    for (let prop in obj) {
        formData.append(prop, obj[prop])
    }
    return formData
}

