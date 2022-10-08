function LinkedList() {
  var length = 0;
  var head = null;
  var sel = null;

  var Node = function (element) {
    this.data = element;
    this.next = null;
  };

  this.size = function () {
    return length;
  };

  this.add = function (element) {
    var node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      currentNode = head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    length++;
  };

  this.insertAtbeginning = function (element) {
    var node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      node.next = head;
      head = node;
    }
    length++;
  };

  this.remove = function () {
    if (head == null) {
      return;
    }
    if (head.next === null) {
      data = head.data;
      head = null;
      sel = null;
      length = 0;
      return data;
    } else {
      currentNode = head;
      while (currentNode.next.next != null) {
        currentNode = currentNode.next;
      }
      data = currentNode.next.data;
      currentNode.next = null;
      sel = currentNode;
      length--;
      return data;
    }
  };

  this.removeFromBeginning = function () {
    if (head == null) {
      return;
    }
    if (head.next === null) {
      data = head.data;
      head = null;
      length = 0;
      return data;
    } else {
      data = head.data;
      head = head.next;
      length--;
      return data;
    }
  };

  this.printList = function () {
    nodes = [];
    if (head === null) {
      console.log("List is Empty");
    } else {
      currentNode = head;
      while (currentNode != null) {
        console.log(currentNode.data);
        nodes.push(currentNode.data);
        currentNode = currentNode.next;
      }
      return nodes;
    }
  };

  this.select = function () {
    if (sel === null) {
      sel = head;
    }
  };

  this.rightSel = function () {
    if (sel === null) {
    } else {
      if (sel.next != null) {
        sel = sel.next;
      }
    }
  };

  this.leftSel = function () {
    if (sel === null) {
    } else {
      if (head != sel) {
        currentNode = head;
        while (currentNode.next != sel) {
          currentNode = currentNode.next;
        }
        sel = currentNode;
      }
    }
  };

  this.insertAfter = function (element) {
    if (sel === null) {
      return false;
    }
    var node = new Node(element);
    node.next = sel.next;
    sel.next = node;
    return true;
  };

  this.deleteAfter = function () {
    if (sel === null) {
      return false;
    }
    if (head == sel) {
      data = sel.data;
      head = null;
      sel = null;
      return data;
    }
    currentNode = head;
    while (currentNode.next != sel) {
      currentNode = currentNode.next;
    }
    data = sel.data;
    currentNode.next = sel.next;
    sel = currentNode;
    return data;
  };

  this.empty = function () {
    head = null;
    sel = null;
    length = 0;
  };

  this.injectList = function (id) {
    start = `<i class="bi bi-record-circle"></i>
                <i class="bi bi-arrow-right"></i>`;
    end = `<i class="bi bi-x-circle"></i>`;

    function htmlNode(data) {
      return `<div class="node" id="node">
                ${data}
            </div>
            <i class="bi bi-arrow-right"></i>`;
    }

    function htmlNodeHighlighted(data) {
      return `<div class="node" id="node" style="outline: solid 6px #cc0000;">
                ${data}
            </div>
            <i class="node-arrow bi bi-arrow-right"></i>`;
    }

    document.getElementById(id).innerHTML = start;

    currentNode = head;
    while (currentNode != null) {
      document.getElementById(id).innerHTML +=
        currentNode == sel
          ? htmlNodeHighlighted(currentNode.data)
          : htmlNode(currentNode.data);
      currentNode = currentNode.next;
    }
    document.getElementById(id).innerHTML += end;
  };
}

var list = new LinkedList();
list.injectList("linkedList");

var con = new terminal("console");
con.init();
commands(["cls"])

function insertNodeHtml() {
  data = document.getElementById("input_data").value;
  document.getElementById("input_data").value = "";
  if (data[0] === " " || data === "") {
  } else {
    if (list.size() == 0) {
      con.log("List created successfully.");
    }
    list.add(data);
    list.injectList("linkedList");
    con.log("Node Created with data: " + data);
  }
}

function prependNodeHtml() {
  data = document.getElementById("input_data").value;
  document.getElementById("input_data").value = "";
  if (data[0] === " " || data === "") {
  } else {
    if (list.size() == 0) {
      con.log("List created successfully.");
    }
    list.insertAtbeginning(data);
    list.injectList("linkedList");
    con.log("Node Created with data: " + data);
  }
}

function emptyList() {
  if (list.size() == 0) {
    con.log("Linked List does not exist.");
  } else {
    list.empty();
    list.injectList("linkedList");
    con.log("List deleted successfully.");
  }
}

function deleteNodeHtml() {
  if (list.size() == 0) {
    con.log("Linked List does not exist.");
  } else {
    data = list.remove();
    list.injectList("linkedList");
    con.log("Node deleted with data: " + data);
  }
}

function deleteBeginningNodeHtml() {
  if (list.size() == 0) {
    con.log("Linked List does not exist.");
  } else {
    data = list.removeFromBeginning();
    list.injectList("linkedList");
    con.log("Node deleted with data: " + data);
  }
}

function printListHtml() {
  nodes = list.printList();
  buff = "";
  for (var i = 0; i < list.size(); i++) {
    buff += nodes[i];
    buff += "->";
  }
  buff += "NULL";
  con.log(buff);
}

function select() {
  if (list.size() === 0) {
    con.log("Nothing to select");
    return;
  }
  list.select();
  list.injectList("linkedList");
}

function Left() {
  list.leftSel();
  list.injectList("linkedList");
}

function Right() {
  list.rightSel();
  list.injectList("linkedList");
}

function insertAfterHtml() {
  data = document.getElementById("input_data").value;
  document.getElementById("input_data").value = "";
  if (data[0] === " " || data === "") {
  } else {
    result = list.insertAfter(data);
    if (result == 1) {
      list.injectList("linkedList");
      con.log("Node Created with data: " + data);
    }
  }
}

function deleteAfterHtml() {
  data = list.deleteAfter();
  if (data != false) {
    con.log("Node deleted with data: " + data);
    list.injectList("linkedList");
  }
}

function parseCommand() {
  command = document.getElementById("command").value;
  command = command.trim();
  con.log("$ " + command);
  if (command.includes(";")) {
    command = command.split(";");
    for (i = 0; i < command.length; i++) {
      command[i] = command[i].trim();
      command[i] = command[i].split(" ");
      commands(command[i]);
    }
  } else {
    command = command.trim();
    command = command.split(" ");
    commands(command);
  }
}

function commands(command) {
  if (command[0] === "insert") {
    if (command[1] != null) {
      list.add(command[1]);
      list.injectList("linkedList");
      con.log(command[1] + " inserted successfully.");
    } else {
      con.log("wrong syntax");
    }
  } else if (command[0] === "ib") {
    if (command[1] != null) {
      list.insertAtbeginning(command[1]);
      list.injectList("linkedList");
      con.log(command[1] + " inserted successfully.");
    } else {
      con.log("wrong syntax");
    }
  } else if (command[0] === "remove") {
    if (list.size() === 0) {
      con.log("List is empty");
    } else {
      data = list.remove();
      list.injectList("linkedList");
      con.log(data + " deleted successfully.");
    }
  } else if (command[0] === "rb") {
    if (list.size() === 0) {
      con.log("List is empty");
    } else {
      data = list.removeFromBeginning();
      list.injectList("linkedList");
      con.log(data + " deleted successfully.");
    }
  } else if (command[0] === "am") {
    if (command[1] != null) {
      for (var i = 1; i < command.length; i++) {
        list.add(command[i]);
        con.log("Appended " + command[i] + " successfully");
      }
      list.injectList("linkedList");
    } else {
      con.log("wrong syntax");
    }
  } else if (command[0] === "pm") {
    if (command[1] != null) {
      for (var i = 1; i < command.length; i++) {
        list.insertAtbeginning(command[i]);
        con.log("Prepended " + command[i] + " successfully");
      }
      list.injectList("linkedList");
    } else {
      con.log("wrong syntax");
    }
  } else if (command[0] === "size") {
    con.log(list.size());
  } else if (command[0] === "print") {
    printListHtml();
  } else if (command[0] === "destroy") {
    emptyList();
  } else if (command[0] === "echo") {
    buff = "";
    for (i = 1; i < command.length; i++) {
      buff = buff + command[i] + " ";
    }
    con.log(buff);
  } else if (command[0] === "cls") {
    con.clear();
    con.log("Type 'help' for command list");
    con.log(" ");
    con.log("To select nodes, press the select button then use the arrow buttons only in a populated LL.");
    con.log(" ");
  } else if (command[0] === "help") {
    con.log(" ");
    con.log("Append: insert data");
    con.log("Prepend: ib data");
    con.log("Remove from end: remove");
    con.log("Remove from Beginning: rb data");
    con.log("Prepend Multiple: pm data1 data2 data3 ...");
    con.log("Append Multiple: am data1 data2 data3 ...");
    con.log("Size of list: size");
    con.log("Clear terminal: cls");
    con.log("Print: echo string");
    con.log("Display list: print");
    con.log("Delete entire list: destroy");
    con.log(" ");
    con.log(
      "Tip: Write multiple commands in the same line by using a ';' separator."
    );
    con.log(" ");
  } else {
    err = "";
    for (var i = 0; i < command.length; i++) {
      err = err + command[i] + " ";
    }
    con.log(err + "is not a valid command.<br>");
  }
}
