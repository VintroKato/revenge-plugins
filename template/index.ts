module.exports = {
    onLoad() {
        try {
            console.log("Плагин загружен");
        } catch (e) {
            console.error("Ошибка при onLoad:", e);
            window.Revenge?.showToast?.("Ошибка в плагине: " + e.message);
        }
    },
    onUnload() {
        console.log("Плагин выгружен");
    }
};
