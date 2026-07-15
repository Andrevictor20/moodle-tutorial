import { fundamentos } from "./chapters/cap01_fundamentos";
import { cursos } from "./chapters/cap02_cursos";
import { atividades } from "./chapters/cap03_atividades";
import { administracao } from "./chapters/cap04_administracao";
import { ia } from "./chapters/cap05_ia";
import { questoes } from "./chapters/cap06_questoes";
import { competencias } from "./chapters/cap07_competencias";
import { infraestrutura } from "./chapters/cap08_infraestrutura";

export const chapters = [
    ...fundamentos,
    ...cursos,
    ...atividades,
    ...administracao,
    ...ia,
    ...questoes,
    ...competencias,
    ...infraestrutura
];

export const getMenuCategories = () => {
    return chapters.reduce((acc: string[], chap) => {
        if (!acc.includes(chap.category)) {
            acc.push(chap.category);
        }
        return acc;
    }, [] as string[]);
};
