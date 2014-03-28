/**
 * Created by ferios on 01.04.14.
 */
$(function() {
    var rows = $('tr').not(':first').not(':last');
    var sum = 0;

    rows.on('click', function(e) {
        var row = $(this);
        if ($(row).hasClass('active') != true) {
            row.addClass('active');
            var s = this.cells[2].innerHTML;
            var number = s.match(/\d+$/);
            number = parseInt(number, 10);
            sum += number;
            document.getElementById("total").innerHTML= sum.toString();
        } else {
            row.removeClass('active');
            var s = this.cells[2].innerHTML;
            var number = s.match(/\d+$/);
            number = parseInt(number, 10);
            sum -= number;
            document.getElementById("total").innerHTML= sum.toString();
        }
    });

    $(document).bind('selectstart dragstart', function(e) {
        e.preventDefault(); return false;
    });

});