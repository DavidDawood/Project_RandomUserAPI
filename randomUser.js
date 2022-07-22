export const GetJsonUser = async () => {
    const { results } = await fetch("https://randomuser.me/api/").then((x) =>
        x.json(),
    );

    return results[0];
};
