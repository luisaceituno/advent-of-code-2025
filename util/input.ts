export function getLines(fileContent: string): string[] {
    return fileContent.split(/\n/).filter(Boolean);
}

export function getGrid(fileContent: string, separator = /\s+/): string[][] {
    return getLines(fileContent).map((line) => line.trim().split(separator));
}