export const GenerateSectionData = contacts => {
    const sections = [];
    const sectionHeaders = contacts.map(data =>
        data.name.charAt(0).toUpperCase(),
    );
    const uniqueHeaders1 = Array.from(new Set(sectionHeaders));
    const uniqueHeaders = uniqueHeaders1.sort();
    uniqueHeaders.forEach(item => {
        const filtered = contacts
            .filter(row => row.name.charAt(0).toUpperCase() === item)
            .sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase());
        sections.push({title: item, data: filtered});
    });
    return sections;
};

export const searchFunction = (contacts, text) => {
    const filtered = contacts.filter(row => {
        const result = `${row.mobile_number}${row.name.toUpperCase()}`;
        const txt = text.toUpperCase();
        return result.indexOf(txt) > -1;
    });
    var data = GenerateSectionData(filtered);
    return data;
};
