var guest = prompt('Кто пришел?','');
if (guest == null) {
	alert('Вход отменен');
}
else if (guest != 'Админ'){
	alert('Я вас не знаю');
}
else{
	var pass = prompt('Пароль?', '');
	if (pass == null){
		alert('Вход отменен');
	}
	else if	(pass != 'Черный властелин'){
		alert('Я вас не знаю');
	}
	else{
		alert('Добро пожаловать!')
	}
}
