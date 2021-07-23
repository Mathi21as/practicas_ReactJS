<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <!--<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">-->
        <title>Unidad 2 POO</title>
    </head>
    <body>
        <form action="index.jsp" method="post">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre"><br>
            <label for="apellido">Apellido:</label>
            <input type="text" id="apellido" name="apellido"><br>
            <label for="edad">Edad:</label>
            <input type="text" id="edad" name="edad"><br>
            <label for="hobbie">Hobbie:</label>
            <input type="text" id="hobbie" name="hobbie"><br>
            <label for="editor">Editor de codigo preferido:</label>
            <input type="text" id="editor" name="editor"><br>
            <label for="so" >Sistema operativo que utiliza:</label>
            <input type="text" id="so" name="so"><br>
            <button type="submit">Enviar</button><br>
            <br>
        </form>

        <%    
            String nombre = request.getParameter("nombre");
            String apellido = request.getParameter("apellido");
            String edad = request.getParameter("edad");
            String hobbie = request.getParameter("hobbie");
            String editor = request.getParameter("editor");
            String so = request.getParameter("so");

            if (nombre != "" && apellido != "" && edad != "" && hobbie != "" && editor != "" && so != "") {
                out.println("Nombre : " + nombre + "<br>");
                out.println("Apellido : " + apellido + "<br>");
                out.println("Edad: " + edad + "<br>");
                out.println("Hobbie: " + hobbie + "<br>");
                out.println("Editor de codigo preferido: " + editor + "<br>");
                out.println("Sistema Operativo que usa: " + so);
            }
            else{
                out.println("Asegurese de completar todos los campos del formulario antes de enviarlo.");
            }
        %>
    </body>
</html>
