const role = 'admin';

if (role === 'manager') {
	console.log('manager');
} else if (role === 'admin') {
	console.log('admin');
} else if (role === 'ceo') {
	console.log('ceo');
} else {
	console.log('Who are you?');
}

switch (role) {
	case 'manager':
		console.log('manager');
		break;
	case 'admin': 
	    console.log('admin');
		break;
	case 'ceo':
		console.log('ceo');
		break;
	default:
		console.log('Who are you?');

}

switch (role) {
	case 'manager':
	case 'admin': 
	    console.log('no superviser');
		break;
	case 'ceo':
		console.log('superviser');
		break;
	default:
		console.log('Who are you?');

}

const num = 1;

switch (true) {
	case num > 0: 
	console.log('positive');
	break;
	case num < 0:
	console.log('negative');
	break;
	default:
		console.log('zero');
}