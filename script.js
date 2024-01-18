$(document).ready(function(){
    // $(selector).action();
    // #id
    // .class
    // tag
    
    // manipulasi css
    // $(selector).css(property, value)

    // multiple css
    //$(selector).css({
        //key : value,
       // key2 : value2
    //})
    console.log($("#input.judul"));
    console.log($("#list.div").eq(2));

    $("body").css("backgroundImage", "linear-gradient(to right,#0d2432,#37526d,#6768ab,#ac8188,#feb17d)");

$(".container").css({
    "maxWidht" : "550px",
    "margin" : "135px auto",
    "background" : "#fff",
    "backgroundRadius" : "7px",
    "padding" : "28px 0"
})
  // manipulasi text
  // .html() dan .text()

  $("button").html("Tambah");

  //console.log($("div").attr("class"));
  //$("div").attr("class", "edit");
  $("div").attr({
    class : "baru",
    type : "text"
  })

$("p").html("Hawa Amelia").addClass("text-center fs-3 fw-bold mt-3")



$(".row").addClass("ms-5 mb-3");



$("#input input"),attr("placeholder","Masukan tugas baru")


$("#input button").html("Tambah")
            .on("click", function(){tambahTugas()})
            .on("mouseenter", function(){inputButton.addClass("btn-warning")})
            .on("mouseout", function(){ inputButton.removeClass("btn-warning");})

     function tambahTugas (){
        let divRow = $("<div>").addClass("row ms-5 mb-2");
        let divCol =$("<div>").addClass("col-8");
        let divForm =$("<div>").addClass("form-check mt-2");
        let InputTag =$("<input>").attr({class : " form-check-input", type : "checkbox"})
            .change(function(){
                tugasSelesai(inputTag, label);

                sembunyikanTugas($("#hide input"));
            })
        let label =$("<label>").addClass("form-check-label").text($("#input input").val());
        let divCol2 =$("<div>").addClass("col-2");
        let dibBtn  =$("<div>").addClass("btn ms-3");
        let icon =$("<i>").addClass("fa-sharp fa-solid fa-trash-can delete")
        .click(function(e){
            hapusTugas(e);
        })

        $("#list").append(divRow);
        divRow.append(divRow, divCol2);
        divCol.append(divForm);
        divForm.append(inputTag, label);
        divCol2.append(divBtn);
        divBtn.append(icon);

    
     }
     $("input input").val("");

     function elSembunyikanTugas(){
        let divRow = $("<div>").addClass("row ms-5 mb-2");
        let divCol =$("<div>").addClass("col-8");
        let divForm =$("<div>").addClass("form-check mt-2");
        let inputTag =$("<input>").attr({class : "form-check-input",type : "checkbox"})
          .change(function(){
            sembunyikanTugas(inputTag);
          });
        let label =$("<label>").addClass("form-check-label").text(sembunyikanTugas);


        $("#hide").append(divRow);
        divRow.append(divCol);
        divCol.append(divForm);
        divForm.append(inputTag, label);
     }
    

     function hapusTugas(e){
        if ($("i").hadClass("delete")){
            $(e.target).parent().parent().parent().remove();
        }
     }
     function tugasSelesai(checkbox, label){
        if(checkbox.is(":checked")){
            label.addClass("done");
        }
        else{
            label.removeClass("done");
        }
     }

     function sembunyikanTugas (checkbox) {
        if(checkbox.is(":checked")){
            $(".done").parent().parent().parent().hide();
        }
        else{
            $(".done").parent().parent().parent().show();
        }
     }
});
