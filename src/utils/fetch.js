export const post = async(url, data) => {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
    })

    return response.json()
}