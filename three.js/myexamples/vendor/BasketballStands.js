class Board  {
	constructor () {
		this.type = 'board'
		this.normal = new THREE.Vector3(0,0,1)
		this.pc = new THREE.Vector3()
		this.obj = new THREE.Object3D();
		//this.width = width;  // for display purpose, should be infinite
		var black = new THREE.MeshLambertMaterial({
		map: loader.load( "https://i.imgur.com/dBsfkR6.jpg" )});
		var boardTexture = [
		black, 
		black,
		black, 
		black, 
		new THREE.MeshLambertMaterial({
		map: loader.load( "https://i.imgur.com/ypg3IJm.jpg" )}),
		black 
		];
		var material = new THREE.MultiMaterial(boardTexture);
		var mesh = new THREE.Mesh(new THREE.CubeGeometry(180,105,5),material);
		this.obj.add (mesh);
	}

	moveTo (x,y,z) {
		this.pc.set (x, y, z)
		this.obj.position.copy (this.pc);
	}

}
class Hoop {
	constructor(radius=22.5) {
		this.type = 'hoop'
		this.hc = new THREE.Vector3()
		this.obj = new THREE.Object3D();
		this.normal = new THREE.Vector3(0,1,0)
		this.radius = radius/100;
		var material = new THREE.MeshLambertMaterial({
		map:loader.load( "https://i.imgur.com/uDsEfox.jpg" )});
		var mesh = new THREE.Mesh(new THREE.TorusGeometry(radius,1,20,100),material);
		this.obj.add(mesh)
	}

	moveTo (x,y,z) {
		this.hc.set (x, y, z)
		this.obj.position.copy (this.hc);
	}

	rotateTo (theta) {  // abs CCW angle
		this.obj.rotation.x = theta;
		//this.normal.applyEuler (new THREE.Euler (0,0,theta))
	}
}