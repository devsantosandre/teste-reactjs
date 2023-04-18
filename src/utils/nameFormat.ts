export const nameSplitTwo = (name: string): string => {
    if ((name || "").split(" ").length > 2) {
        return `${name.split(" ")[0]} ${name.split(" ")[1][0]}.`;
    }
    return name;
};


export const nameSplitOne = (name: string): string => {
    if ((name || "").split(" ").length > 2) {
        return `${name.split(" ")[0]}`;
    }
    return name;
};