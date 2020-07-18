Curso de vim 
1 introduccion

2 instalacion de vim
neovim
version 4

linux
sudo pacman -S neovim 

vim - vi Mejorado
version 8.2.914 es la instalada

3 Salir de vim 
abrir vim o neovim 
> vim ó nvim

q + enter 

esc esc: q + enter 
esc esc: q! + enter // si no queremos guardar.

4 trabaja con modos.
capas en el teclado. QWERTY
shift a mayusculas, dependiendo del modo 

5 moviendo el cursos entre palabras. 
abrir un archivo 
desde terinal nos posicionamos en la carpeta 
vim index.js 

HJKL 
	H izquierda
	J abajo
	K arriba
	L derecha

DD salta al siguiente objeto de texto 
BB atras
EE al final de la palabra 

6 insertar y agregar texto

con i deja la barra vertical y al final Esc Esc 
i -- INSERT -- -> podemos insertar texto.
Esc Esc -> salir rapidamente a modo normal 

otra forma para ingresar al modo insertar.
a -- INSERT -- antes del cursor 
i -- INSERT -- despues del cursor
A -- INSERT -- nos posiciona al final de la linea para insertar

7 eliminar texto 

x elimina los caracteres igual que el suprimir

8 guardar archivo

modo normal 
Esc Esc :w guardar
Esc Esc :w! forzar guardado
	
	writen 

otra forma
:wq guarda y se sale 

9 moverse entre archivos, dentro del mismo editor

gd definicion de la constante
gf navega hacia el archivo 

historial hacia adelante y hacia atras
	ctrl o 
	ctrl i

10 comando para eliminar undo, redo 

Esc Esc modo normal. para poder empezar a liminar algo.
:w 

	dw delete word -> elimina por palabras

recuperar o dehacer 
	
	u deshacer.
	ctrl r rehacer.

b 
$ elimina linea desde el cursor
















