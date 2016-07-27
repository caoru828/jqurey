$(document).ready(function() {
    //$("#btn_s").click(function(e){
    //e.preventDefault();
    //var movieName=$("#searchInput").val();
//for view
    console.log("enter");
    $.ajax({
        url: "http://localhost:8080/users",
        dataType: 'json',
        success: function(data) {
            //console.log(data);
            for (var i = 0; i < data.length; i++) {
                var temp = '<tr> <td> ' + data[i].id +
                    '</td> <td>' + data[i].age +
                    '</td><td>' + data[i].eyeColor +
                    '</td> <td>' + data[i].name + '</td> <td>' + data[i].gender + '</td> <td>' + data[i].email + '</td> <td>' + data[i].phone + '</td> <td>' + data[i].address + '</td><td>' +
                    '<button type="submit" id="btn1">delete</button>' + '  ' +
                    '<a href="#myModal2" role="button" class="btn btn-warning" id="edit1" data-toggle="modal"> Edit</a>' + '</td> </tr>';
                //+"<button type="button">"+Delete+"</button>";
                //"></td> </tr>";
                $('table').append(temp);
            }

        }
    });
    //name="+$("#)val()
    //for delete
    $("#ta1").on('click', '#btn1', function() {
        var a = $('td:first', $(this).parents('tr')).text();

        console.log(a);
        $(this).closest('tr').remove();
        $.ajax({
            method: "DELETE",
            url: 'http://localhost:8080/users/' + a.trim(),


            success: function(list) {

                alert("You deleted A Employee");

            }
        });
    });

    //add a row
    $("#row2").on('click', '#add', function() {
    	console.log("button")
        $("#savebtn").click(function() {
            var user = {
                //"id":$('id').val(),
                "name": $('#name1').val(),
                "gender": $('#gender1').val(),
                "age": $('#age1').val(),
                "eyeColor": $('#color1').val(),
                "phone": $('#phone1').val(),
                //"gender": $('#gender1').val(),
                "email": $('#email1').val(),
                "address": $('#address1').val()
            }
            $.ajax({
                method: "POST",
                url: 'http://localhost:8080/users',
                //type: 'post',
                // url: 'http://localhost:8080/users?name_like='+,
                data: JSON.stringify(user),
                contentType: 'application/json',
                success: function(data) {
                    alert("Added Successfully");
                    location.reload();
                }
            })

        });
    });



    //editing

    $("#ta1").on('click', '#edit1', function() {
        var a = $('td:first', $(this).parents('tr')).text();
				console.log("buttonedit")
        $.ajax({
            method: "GET",
            url: 'http://localhost:8080/users/' + a.trim(),
            //type: 'post',
            dataType: 'json',
            success: function(data) {
                console.log(data.phone);
                $("#id2").val(data.id),
                    $("#age2").val(data.age),
                    $("#color2").val(data.eyeColor),
                    $("#name2").val(data.name),
                    $("#gender2").val(data.gender),
                    $("#email2").val(data.email),
                    $("#phone2").val(data.phone),
                    $("#address2").val(data.address), +$("#phone2").val(data.phone);
            }

        })
        //console.log("call update");
    });

    $("#savebtn1").click(function() {
        var user = {
            "id": $('#id2').val(),
            "age": $('#age2').val(),
            "eyeColor": $('#color2').val(),
            "name": $('#name2').val(),
            "gender": $('#gender2').val(),
            "email": $('#email2').val(),
            "phone": $('#phone2').val(),
            "addres": $('#addres2').val()
        }
        $.ajax({
            method: "PATCH",
            url: 'http://localhost:8080/users/' + $('#id2').val(),
            //type: 'post',
            data: JSON.stringify(user),
            contentType: 'application/json',
            success: function(data) {
                alert("updated successfully");
                location.reload();
            }
        })
    });
});


// 




//    });
// });
