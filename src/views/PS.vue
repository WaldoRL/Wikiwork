<template>
    <div class="container">
      <div id="qa-introduction" class="content">
        <h1>Principios SOLID</h1>
        <p>Los principios SOLID son un conjunto de directrices de diseño en la programación orientada a objetos, destinadas a crear software más comprensible, flexible y mantenible. El acrónimo SOLID representa cinco principios fundamentales, cada uno enfocado en un aspecto específico del diseño del software. A continuación te explico cada uno de los principios:</p>
  
        <h3>1. Single Responsibility Principle (SRP)</h3>
        <p><strong>Principio de Responsabilidad Única</strong></p>
        <p>Este principio establece que una clase debe tener una y solo una razón para cambiar, lo que significa que una clase debe tener una única responsabilidad o propósito. Mantener la responsabilidad única ayuda a crear clases más cohesionadas y menos propensas a errores cuando se realizan cambios.</p>
  
        <h3>2. Open/Closed Principle (OCP)</h3>
        <p><strong>Principio de Abierto/Cerrado</strong></p>
        <p>El principio de abierto/cerrado establece que las entidades de software (clases, módulos, funciones, etc.) deben estar abiertas para extensión, pero cerradas para modificación. Esto significa que el comportamiento de una clase puede extenderse sin modificar su código fuente. Esto se logra a menudo a través de la herencia y la implementación de interfaces.</p>
  
        <h3>3. Liskov Substitution Principle (LSP)</h3>
        <p><strong>Principio de Sustitución de Liskov</strong></p>
        <p>Este principio fue formulado por Barbara Liskov y establece que una clase derivada debe ser sustituible por su clase base sin alterar el comportamiento correcto del programa. En otras palabras, los objetos de una clase derivada deben poder reemplazar objetos de la clase base sin afectar la funcionalidad.</p>
  
        <h3>4. Interface Segregation Principle (ISP)</h3>
        <p><strong>Principio de Segregación de Interfaces</strong></p>
        <p>El principio de segregación de interfaces sugiere que es mejor tener muchas interfaces específicas y pequeñas que una única interfaz grande y monolítica. Los clientes no deben verse obligados a depender de interfaces que no utilizan. Esto ayuda a mantener el diseño del sistema más limpio y desacoplado.</p>
  
        <h3>5. Dependency Inversion Principle (DIP)</h3>
        <p><strong>Principio de Inversión de Dependencias</strong></p>
        <p>El principio de inversión de dependencias establece que los módulos de alto nivel no deben depender de módulos de bajo nivel, sino que ambos deben depender de abstracciones (interfaces o clases abstractas). Además, las abstracciones no deben depender de los detalles; los detalles deben depender de las abstracciones. Esto reduce el acoplamiento entre módulos y hace el código más fácil de mantener y escalar.</p>
  
        <h3>Ejemplo Práctico en JavaScript:</h3>
        <pre>
          <code>
  // Single Responsibility Principle
  class Invoice {
    constructor(customer) {
      this.customer = customer;
    }
  
    generate() {
      // Generate invoice
    }
  
    print() {
      // Print invoice
    }
  }
  
  // Open/Closed Principle
  class Shape {
    area() {}
  }
  
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    area() {
      return this.width * this.height;
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    area() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  // Liskov Substitution Principle
  class Bird {
    fly() {
      console.log("I can fly");
    }
  }
  
  class Penguin extends Bird {
    fly() {
      throw new Error("I can't fly");
    }
  }
  
  // Interface Segregation Principle
  class Printer {
    printDocument() {}
  }
  
  class Scanner {
    scanDocument() {}
  }
  
  class AllInOnePrinter {
    printDocument() {}
    scanDocument() {}
  }
  
  // Dependency Inversion Principle
  class Database {
    connect() {}
  }
  
  class MySQLDatabase extends Database {
    connect() {
      // MySQL specific connection code
    }
  }
  
  class Application {
    constructor(database) {
      this.database = database;
    }
  
    start() {
      this.database.connect();
    }
  }
  
  const mySQLDatabase = new MySQLDatabase();
  const app = new Application(mySQLDatabase);
  app.start();
          </code>
        </pre>
  
        <h3>Beneficios de Aplicar los Principios SOLID:</h3>
        <ul>
          <li><strong>Mantenibilidad:</strong> Código más fácil de entender y modificar.</li>
          <li><strong>Flexibilidad:</strong> Posibilidad de extender el código sin necesidad de modificarlo.</li>
          <li><strong>Reutilización:</strong> Componentes de software que pueden ser reutilizados en diferentes contextos.</li>
          <li><strong>Escalabilidad:</strong> Facilita la adición de nuevas funcionalidades sin comprometer las existentes.</li>
        </ul>
        <p>Estos principios son fundamentales para cualquier desarrollador de software que desee crear aplicaciones robustas y escalables.</p>
      </div>
    </div>
  </template>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
    background-color: #3c3c3c4a; /* Color de fondo */
  }
  
  .content {
    max-width: 800px;
    text-align: left;
    padding: 20px;
    border-radius: 10px;
    background-color: #3c3c3c4a; /* Fondo blanco para el contenido */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Sombra sutil */
  }
  
  .content h1,
  .content h3 {
    text-align: center;
    margin-bottom: 10px;
    margin-top: 5px;
  }
  
  .content p,
  .content ul,
  .content ol {
    text-align: justify;
    margin-bottom: 15px; /* Espaciado entre párrafos y listas */
  }
  
  .content ul,
  .content ol {
    padding-left: 20px;
  }
  
  pre {
    background-color: #3c3c3c4a; /* Color de fondo del bloque de código */
    border-radius: 5px;
    overflow-x: auto;
    padding: 10px; /* Añade padding al bloque de código */
  }
  
  .content h2 {
    text-align: center;
    margin-bottom: 3px;
  }
  </style>
  