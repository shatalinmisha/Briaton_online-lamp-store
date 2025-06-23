import applyFilters from "../loadProducts/applyFilters.js";
import * as componentsVariabals from "../globalVariable/componentsVariabals.js";

export default function setPage(pageNum) {
    componentsVariabals.setCurrentPage(pageNum);
    applyFilters(); // пересчёт при переключении страницы
}