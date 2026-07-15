import { fundamentos } from "./chapters/cap01_fundamentos";
import { cursos } from "./chapters/cap02_cursos";
import { atividades } from "./chapters/cap03_atividades";
import { administracao } from "./chapters/cap04_administracao";

export const chapters = [
    ...fundamentos,
    ...cursos,
    ...atividades,
    ...administracao
];

export const getMenuCategories = () => {
    return chapters.reduce((acc: string[], chap) => {
        if (!acc.includes(chap.category)) {
            acc.push(chap.category);
        }
        return acc;
    }, [] as string[]);
};
