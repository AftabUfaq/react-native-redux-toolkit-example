import Contacts from 'react-native-contacts';
import countries from '../Data/countries';
export function findByMatchingProperties(country_code) {
    return countries.filter(function(entry) {
        return Object.keys(country_code).every(function(key) {
            return entry[key] === country_code[key];
        });
    });
}

// countrycode here is PK , US, AUS , NZ , IND,
export const GetUserContacts = countrycode => {
    return new Promise((resolve, reject) => {
        var results = findByMatchingProperties({
            code: `${countrycode}`.toLocaleUpperCase(),
        });
        Contacts.getAll().then(contacts1 => {
            let items = [];
            contacts1.forEach((item, index) => {
                item.phoneNumbers.map((x, index) => {
                    items.push({
                        key: `${index}${x.id}`,
                        company: item.company,
                        department: item.department,
                        displayName: item.displayName,
                        familyName: item.familyName,
                        givenName: item.givenName,
                        hasThumbnail: item.hasThumbnail,
                        middleName: item.middleName,
                        thumbnailPath: item.thumbnailPath,
                        phoneNumbers: [
                            {
                                id: x.id,
                                label: x.label,
                                number: x.number,
                            },
                        ],

                        name: item.displayName, //`${item.familyName} ${item.middleName}`,
                        mobile_number: x.number
                            .replace(' ', '')
                            .replace(/-|\s/g, ''),
                        country_code: `+${results[0].callingCode}`,
                        iso2: countrycode.toLocaleUpperCase(),
                        image: item.thumbnailPath,
                    });
                });
            });

            resolve(items);
        });
    });
};

const Copy_GetUserContacts = countrycode => {
    var results = findByMatchingProperties(countries[0].items, {
        code: `${countrycode}`.toLocaleUpperCase(),
    });

    Contacts.getAll().then(contacts1 => {
        // console.log(contacts1);
        let items = [];
        contacts1.forEach((item, index) => {
            item.phoneNumbers.map((x, index) => {
                items.push({
                    key: `${index}${x.id}`,
                    company: item.company,
                    department: item.department,
                    displayName: item.displayName,
                    familyName: item.familyName,
                    givenName: item.givenName,
                    hasThumbnail: item.hasThumbnail,
                    middleName: item.middleName,
                    thumbnailPath: item.thumbnailPath,
                    phoneNumbers: [
                        {
                            id: x.id,
                            label: x.label,
                            number: x.number,
                        },
                    ],

                    name: `${item.familyName} ${item.middleName}`,
                    mobile_number: x.number
                        .replace(' ', '')
                        .replace(/-|\s/g, ''),
                    country_code: `+${results[0].callingCode}`,
                    iso2: countrycode.toLocaleUpperCase(),
                    image: item.thumbnailPath,
                });
            });
        });
        dispatch({
            type: 'CONTACTS',
            payload: items.filter(
                (v, i, a) =>
                    a.findIndex(t => t.mobile_number === v.mobile_number) === i,
            ),
        });
    });
};
