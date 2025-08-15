module.exports = {
    onLoad() {
        console.log("[Test Plugin] Плагин успешно загрузился!");
        window.Revenge?.showToast?.("Test Plugin загружен!");
    },
    onUnload() {
        console.log("[Test Plugin] Плагин выгружен!");
        window.Revenge?.showToast?.("Test Plugin выгружен!");
    }
};
