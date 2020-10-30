//Спрятать 2ую часть формы
$("#form-content-2").fadeOut(0);
$('#back').fadeOut(0);

//Маска для номера телефона
jQuery(function ($) {
	$("#phone").mask("+9(999) 999-99-99");
	$("#managerphone").mask("+9(999) 999-99-99");

});

//проверка на заполнение чекбокса при загрузке страницы
if ($('input[name="agree"]').is(':checked')) {
	$('button[name="action"]').removeClass("disabled");
} else {
	$('button[name="action"]').addClass("disabled");
}

//При событии click проверяет изменился ли чекбокс
$('input[name="agree"]').on('click', function () {
	if ($(this).is(':checked')) {
		$('button[name="action"]').removeClass("disabled");
	} else {
		$('button[name="action"]').addClass("disabled");
	}
});


//tooltip
$(document).ready(function () {
	$('.tooltipped').tooltip({
		delay: 50
	});
});


//проверка на заполнение формы
//открытие 2ой формы регистрации
$("#nextbutton").click(function () {
	if (document.getElementById("workName").value == '' || document.getElementById("researchArea").value == '' || document.getElementById("workInfo").value == '' || document.getElementById("birthday").value == '' || document.getElementById("phone").value == '' || document.getElementById("email").value == '') {
		if (document.getElementById("workName").value == '') {
			Materialize.toast('Введите название конкурсной работы', 2000);
		}
		if (document.getElementById("researchArea").value == '') {
			Materialize.toast('Введите область исследования', 2000);
		}
		if (document.getElementById("workInfo").value == '') {
			Materialize.toast('Введите сведения о месте учебы (работы) соискателя', 2000);
		}
		if (document.getElementById("birthday").value == '') {
			Materialize.toast('Введите дату рождения', 2000);
		}
		if (document.getElementById("phone").value == '') {
			Materialize.toast('Введите номер телефона', 2000);
		}
		if (document.getElementById("email").value == '') {
			Materialize.toast('Введите e-mail', 2000);
		}
		return false;
	} else {
		$("#form-content-1").fadeOut(400);
		$("#form-content-2").fadeIn(400);
		$("#back").fadeIn(400);
	}
});

$("#back").click(function () {
	$("#form-content-2").fadeOut(400);
	$("#form-content-1").fadeIn(400);
	$("#back").fadeOut(400);
});

$(document).ready(function () {
	// the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
	$('.modal').modal();
});

var count = 1;

function removeCh(btnRemove) {
	$(document).ready(function () {
		count--;
		console.log("removeCh");
		$(btnRemove).parent().parent().detach();
		var lastbutton = "<div class=\"input-field col s1\"  id=\"remove-" + count + "\">" + //открытие блока с кнопкой
			"<a class=\"btn-floating waves-effect waves-light\" type=\"button\" onclick=\"removeCh(this)\"><i class=\"material-icons\">clear</i></a>" +
			"</div>"; //закрытие блока;
		if (count != 1) {
			$('.workwrapper:last').append(lastbutton);
		}
	});
}

function addChild() {
	$(document).ready(function () {
		count++;
		console.log("addChild");
		var child = "<div class='workwrapper row'>" + //открытие wrapper'a
			"<div class='input-field col m3 s6'>" + // открытие блока этапа
			"<label for=\projstage-" + count + "\">Этап реализации</label>" + //раскомментировать если нужен заголовок полей на каждой созданной строке
			"<input type='text' id='projstage-" + count + "' name='projstage-" + count + "'>" + //Поле ввода этапа с инкрементацией при создании нового
			"</div>" + //закрытие блока этапа
			"<div class=\"input-field col m2 s6\">" + //открытие блока дата начало этапа
			"<label for=\"projstart-" + count + "\">Дата начала:</label>" + //раскомментировать если нужен заголовок полей на каждой созданной строке
			"<input type=\"text\" class=\"datepicker2\" id=\"projstart-" + count + "\">" + //поле ввода начала этапа
			"</div>" + //закрытие блока дата начало этапа
			"<div class=\"input-field col m2 s6\">" + //открытие блока дата окончания этапа
			"<label for=\"projfinish-" + count + "\">Дата окончания:</label>" + //раскомментировать если нужен заголовок полей на каждой созданной строке 
			"<input type=\"text\" class=\"datepicker2\" id=\"projfinish-" + count + "\">" + //Поле ввода даты окончания этапа
			"</div>" + //закрытие блока окончания этапа
			"<div class=\"input-field col m4 s6\">" + //открытие блока итога
			"<label for=\"projresult-" + count + "\">Итог</label>" + //раскомментировать если нужен заголовок полей на каждой созданной строке
			"<input id=\"projresult-" + count + "\" type=\"text\"></input>" + //Поле ввода итога
			"</div>" + //закрытие блока итога
			"<div class=\"input-field col m1 s1\"  id=\"remove-" + count + "\">" + //открытие блока с кнопкой
			"<a class=\"btn-floating waves-effect waves-light\" type=\"button\" onclick=\"removeCh(this)\"><i class=\"material-icons\">clear</i></a>" +
			"</div>" + //закрытие блока
			"</div>"; //закрытие wrapper'а
		if ($(".workwrapper").is(":last")) {
			$('.workwrapper:last').after(child);
		} else {
			$("#projtable").append(child);
		}

		var rcount = count - 1;
		var remove = "#remove-" + rcount;
		$(remove).detach();

		//Выбор даты
		$('.datepicker2').pickadate({
			selectMonths: true, // Creates a dropdown to control month
			selectYears: 20, // Creates a dropdown of 15 years to control year,
			today: 'Today',
			clear: 'Clear',
			close: 'Ok',
			closeOnSelect: false, // Close upon selecting a date,
			min: true,
		});
	});
};


$("#send").click(function checkForm() {
	if (document.getElementById("managerFIO").value == '' || document.getElementById("address").value == '' || document.getElementById("managerphone").value == '' || document.getElementById("manageremail").value == '' || document.getElementById("socialaddress").value == '' || document.getElementById("projName").value == '' || document.getElementById("projtagline").value == '' || document.getElementById("projstatus").value == '' || document.getElementById("projactual").value == '' || document.getElementById("projtarget").value == '' || document.getElementById("projgeo").value == '' || document.getElementById("projstart").value == '' || document.getElementById("projaudience").value == '' || document.getElementById("projoffer").value == '' || document.getElementById("projproblem").value == '' || document.getElementById("projstage").value == '' || document.getElementById("projstart-1").value == '' || document.getElementById("projfinish-1").value == '' || document.getElementById("projresult").value == '' || document.getElementById("projprom").value == '' || document.getElementById("projpartner").value == '' || document.getElementById("projmodel").value == '' || document.getElementById("projoutput").value == '' || document.getElementById("projeffect").value == '' || document.getElementById("projbudget").value == '' || document.getElementById("projdonor").value == '' || document.getElementById("projinvest").value == '' || document.getElementById("projyear").value == '') {
		if (document.getElementById("managerFIO").value == '') {
			Materialize.toast('Введите Ф.И.О. автора', 2000);
		}
		if (document.getElementById("address").value == '') {
			Materialize.toast('Введите адрес проживания автора', 2000);
		}
		if (document.getElementById("manageremail").value == '') {
			Materialize.toast('Введите email автора', 2000);
		}
		if (document.getElementById("socialaddress").value == '') {
			Materialize.toast('Введите ссылку на Вконтакте', 2000);
		}
		if (document.getElementById("projName").value == '') {
			Materialize.toast('Введите название проекта ', 2000);
		}
		if (document.getElementById("projtagline").value == '') {
			Materialize.toast('Введите слоган проекта', 2000);
		}
		if (document.getElementById("projstatus").value == '') {
			Materialize.toast('Введите текущую стадия проекта', 2000);
		}
		if (document.getElementById("projactual").value == '') {
			Materialize.toast('Введите актуальность проекта', 2000);
		}
		if (document.getElementById("projtarget").value == '') {
			Materialize.toast('Введите цель проекта', 2000);
		}
		if (document.getElementById("projgeo").value == '') {
			Materialize.toast('Введите географию проекта', 2000);
		}
		if (document.getElementById("projstart").value == '') {
			Materialize.toast('Введите начало реализации проекта', 2000);
		}
		if (document.getElementById("projaudience").value == '') {
			Materialize.toast('Введите целевую аудиторию проекта', 2000);
		}
		if (document.getElementById("projoffer").value == '') {
			Materialize.toast('Введите преимущества вашего проекта ', 2000);
		}
		if (document.getElementById("projproblem").value == '') {
			Materialize.toast('Введите описание решения проблемы', 2000);
		}
		if (document.getElementById("projstage").value == '' || document.getElementById("projstart-1").value == '' || document.getElementById("projfinish-1").value == '' || document.getElementById("projresult").value == '') {
			Materialize.toast('Заполните календарный план', 2000);
		}
		if (document.getElementById("projprom").value == '') {
			Materialize.toast('Введите продвижение проекта', 2000);
		}
		if (document.getElementById("projpartner").value == '') {
			Materialize.toast('Введите партнеров проекта  ', 2000);
		}
		if (document.getElementById("projmodel").value == '') {
			Materialize.toast('Введите модель монетизации', 2000);
		}
		if (document.getElementById("projoutput").value == '') {
			Materialize.toast('Введите результаты проекта', 2000);
		}
		if (document.getElementById("projeffect").value == '') {
			Materialize.toast('Введите оценку эффективности проекта', 2000);
		}
		if (document.getElementById("projbudget").value == '' || document.getElementById("projdonor").value == '' || document.getElementById("projinvest").value == '' || document.getElementById("projyear").value == '') {
			Materialize.toast('Укажите бюджет проекта (Заполните пункт "Бюджет проекта")', 2000);
		}
		return false;
	} else {
		alert("отправлено");
		return true;
	}
});

$('.datepicker').pickadate({
	selectMonths: true, // Creates a dropdown to control month
	selectYears: 40, // Creates a dropdown of 15 years to control year,
	today: 'Today',
	clear: 'Clear',
	close: 'Ok',
	closeOnSelect: false, // Close upon selecting a date,
	max: true,
});
$('.datepicker2').pickadate({
	selectMonths: true, // Creates a dropdown to control month
	selectYears: 20, // Creates a dropdown of 15 years to control year,
	today: 'Today',
	clear: 'Clear',
	close: 'Ok',
	closeOnSelect: false, // Close upon selecting a date,
	min: true,
});
