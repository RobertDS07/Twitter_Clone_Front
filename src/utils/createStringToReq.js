export default obj => {
    const stringArry = []

    for (const key in obj) {
        stringArry.push(`${key}: "${obj[key]}"`)
    }

    return stringArry.toString()
}
