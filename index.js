$(function() {
$('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    const newElement = $(this).find('#shopping-list-entry');
    $("ul").append(
        "<li>" +
        "<span class='shopping-item'>" + `${newElement.val()}` + "</span>"
        + "<div class='shopping-item-controls'>" +
        "<button class='shopping-item-toggle'>" +
            "<span class='button-label'>check</span>" +
          "</button>" +
          " " +
          "<button class='shopping-item-delete'>" +
            "<span class='button-label'>delete</span>" +
          "</button>" +
        "</div>" +
      "</li>"
    );
});
});

$('ul').on('click', '.shopping-item-delete', function(event){
    this.closest('li').remove();
});

$('ul').on('click', '.shopping-item-toggle', function(event){
    $(this).closest('li').children('.shopping-item').toggleClass("shopping-item__checked");
}); 