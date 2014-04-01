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
//            for (var j = 0, col; col = this.cells[j]; j++) {
//                this.cells[j].style.backgroundColor='#f00'
//            }
            var number = s.match(/\d+$/);
            number = parseInt(number, 10);
            sum += number;
            document.getElementById("total").innerHTML= sum.toString();
            this.cells[0].getElementsByTagName('input')[0].checked = true;
        } else {
            row.removeClass('active');
            var s = this.cells[2].innerHTML;
            var number = s.match(/\d+$/);
            number = parseInt(number, 10);
            sum -= number;
            document.getElementById("total").innerHTML= sum.toString();
            this.cells[0].getElementsByTagName('input')[0].checked = false;
        }
    });



    $(document).bind('selectstart dragstart', function(e) {
        e.preventDefault(); return false;
    });

});