// This implementation wouldn't scale well, but since I'm not using a database, there are only so many solutions I can think of
$(document).ready(function() {
    $("#gameTitle").click(function(event) {
        var modal = $("#gameTitleModal");
        showModal(modal, event.pageX, event.pageY);
    });

    $("#baseBuilding").click(function(event) {
        var modal = $("#baseBuildingModal");
        showModal(modal, event.pageX, event.pageY);
    });

    $("#research").click(function(event) {
        var modal = $("#researchModal");
        showModal(modal, event.pageX, event.pageY);
    });
});

// This function is used to show each modal, instead of copy-pasting the code several times
function showModal(modal, mouse_x, mouse_y) {
    modal.modal("show");

    var modal_content = modal.find(".modal-content");
    var modal_dialog = modal.find(".modal-dialog")
    var modal_height = modal_content.height();

    var y_buffer = 60;
    var x_buffer = 40;

    modal_content.css("left", mouse_x + x_buffer);
    modal_content.css("top", mouse_y - (modal_height + y_buffer));
    modal_dialog.css("position", "absolute");
}