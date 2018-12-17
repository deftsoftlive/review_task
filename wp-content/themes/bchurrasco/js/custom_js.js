$(document).ready(function () {

    /**
     * Validate and submit booking form
     */
    $("body").on("click", "#order", function () {
        $("#order_form").validate({
            rules: {
                first_name: {
                    required: true
                },
                last_name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                contact: {
                    required: true,
                    number: true,
                    minlength: 8,
                    maxlength: 12
                },
                booking_date:{
                     required: true
                }
            },
            messages: {
                first_name: {
                    required: "Please enter first name"
                },
                last_name: {
                    required: "Please enter last name"
                },
                email: {
                    required: "Please enter email",
                    email: "Please enter vaild email"
                },
                contact: {
                    required: "Please enter contact number",
                    number: "Please enter vaild contact number",
                    minlength: "Please enter vaild contact number",
                    maxlength: "Please enter vaild contact number"
                },
                booking_date:{
                     required: "Please select booking date"
                }
            },
            submitHandler: function (form) {
                var seleceted_item = 0;
                var data_array = new Array();
                var person_array = new Array();
                var total_persons = jQuery("#no_of_person").val();
                jQuery(".pick_item").each(function () {
                    var me = jQuery(this);
                    if (me.is(":checked")) {
                        var price = me.attr("data-val");
                        var person = 0;
                        if (me.hasClass("per_person")) {
                            price = price * total_persons;
                            person = 1;
                        }
                        data_array.push(price);
                        person_array.push(person);
                        seleceted_item++;
                    }
                });
                jQuery("#price_array").val(data_array);
                jQuery("#person_array").val(person_array);

                if (seleceted_item == 0) {
                    alert("Please select Atleast one item");
                    return false;
                }
                form.submit();

            }
        });


    });
    /** set price according to selected items*******/

    jQuery("body").on("change", ".pick_item,#no_of_person", function () {
        var total_price = 0.00;
        var total_persons = jQuery("#no_of_person").val();
        jQuery(".pick_item").each(function () {
            var me = jQuery(this);
            if (me.is(":checked")) {

                var price = me.attr("data-val");
                var price1 = parseFloat(price);
                if (me.hasClass("per_person")) {
                    price1 = price1 * total_persons;
                }
                total_price = total_price + price1;
            }
        });
        var per_person_price = (total_price / total_persons).toFixed(2);
        $("#total_price").text("$ " + total_price.toFixed(2));
        $("#price_per_person").text("$ " + per_person_price);
        $("#total_bill_price").val(total_price.toFixed(2));
    });


});
