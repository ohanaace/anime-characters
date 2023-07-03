import connection from "../database/database";

export function getCharactersDB(){
    return connection.query(`SELECT * FROM characters`);
};

export function getCharacterById(id: number){
    return connection.query(`SELECT * FROM characters WHERE id=$1`, [id]);
};

export function createNewCharacterDB(name: string, anime: string, role: string, status: string){
    return connection.query(`
    INSERT INTO characters 
        (name, anime, role, status)
        VALUES ($1, $2, $3, $4);`,
    [name, anime, role, status]);
};

export function updateCharacterByIdDB(id: number, updatedInfo: {[key: string]: string}){
    const updateFields = Object.keys(updatedInfo).map((key, index) => {
        return `${key} = $${index + 2}`
    }).join(', ');
    const query = {
        text: `UPDATE characters SET ${updateFields} WHERE id=$1`,
        values: [id, ...Object.values(updatedInfo)]
    };
    return connection.query(query);
};

export function deleteCharacterByIdDB(id: number){
    const results = connection.query(`
    DELETE FROM characters 
        WHERE id=$1
        RETURNING id, name, anime, role, status
    ;`, [id]);
    return results;
};