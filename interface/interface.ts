interface login {
	(username: string, password: string): boolean;
}

let loginUser: login;
loginUser = function(id: string, pw: string) {
	console.log('로그인 했습니다');
  console.log(`id: ${id} / pw: ${pw}`);
	return true;
}

console.log(loginUser('yujin', 'wonyu'));

///

interface Person {
  name: string;
}

interface Developer extends Person {
  skill: string;
}

let fe = {} as Developer;
fe.name = 'josh';
fe.skill = 'TypeScript';
