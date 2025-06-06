import applyFilters from "./applyFilters.js";
import { setCurrentPage } from "./paginationStore.js";

export default function setPage(pageNum) {
    setCurrentPage(pageNum);
    applyFilters(); // пересчёт при переключении страницы
}