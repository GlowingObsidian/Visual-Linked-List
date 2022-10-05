function LinkedList(){
    var length=0
    var head=null 

    var Node = function(element)
    {
        this.data=element
        this.next=null
    }

    this.size = function()
    {
        return length
    }
    
    this.add = function(element)
    {
        var node = new Node(element)
        if(head===null)
        {
            head=node
        }
        else
        {
            currentNode=head
            while(currentNode.next)
            {
                currentNode=currentNode.next;
            }
            currentNode.next=node;
        }
        length++
    }

    this.remove = function()
    {
        if(head==null)
        {
            return 
        }
        if(head.next===null)
        {
            data=head.data
            head=null
            length=0
            return data
        }
        else
        {
            currentNode=head
            while(currentNode.next.next!=null)
            {
                currentNode=currentNode.next
            }
            data=currentNode.next.data
            currentNode.next=null
            length--
            return data
        }
    }

    this.printList = function()
    {
        if(head===null)
        {
            console.log("List is Empty")
        }
        else
        {
            currentNode=head
            while(currentNode!=null)
            {
                console.log(currentNode.data)
                currentNode=currentNode.next
            }
        }
    }

    this.empty = function()
    {
        head=null
        length=0
    }

    this.injectList = function(id)
    {
        start=`<i class="bi bi-record-circle"></i>
                <i class="bi bi-arrow-right"></i>`
        end=`<i class="bi bi-x-circle"></i>`

        function htmlNode(data)
        {
            return `<div class="node" id="node">
                ${data}
            </div>
            <i class="bi bi-arrow-right"></i>`
        }

        function htmlNodeHighlighted(data)
        {
            return `<div class="node" id="node" style="border: solid 6px #cc0000;">
                ${data}
            </div>
            <i class="bi bi-arrow-right"></i>`
        }
        
        document.getElementById(id).innerHTML=start

        currentNode=head
        while(currentNode!=null)
        {
            document.getElementById(id).innerHTML+=currentNode.data==20?htmlNodeHighlighted(currentNode.data):htmlNode(currentNode.data)
            currentNode=currentNode.next
        }
        document.getElementById(id).innerHTML+=end
    }
}


function terminal(id)
{
    this.init = function()
    {
        document.getElementById(id).innerHTML='<p style="text-align: center;">-: VLL Console v1.0 :-</p>'
    }

    this.log = function(data)
    {
        document.getElementById(id).innerHTML+=('<br>'+data)
        document.getElementById(id).scrollTop = document.getElementById(id).scrollHeight;
    }
}

var list = new LinkedList()
list.injectList("linkedList")

var con = new terminal("console")
con.init()


function insertNodeHtml()
{

    data=document.getElementById("input_data").value
    document.getElementById("input_data").value=''
    if(data[0]===' ' || data===''){}
    else
    {
        if(list.size()==0)
        {
            con.log("List created successfully.")
        }
        list.add(data)
        list.injectList("linkedList")
        con.log("Node Created with data: "+data)
    }
}

function emptyList()
{
    if(list.size()==0)
    {
        con.log("Linked List does not exist.")
    }
    else
    {
        list.empty()
        list.injectList("linkedList")
        con.log("List deleted successfully.")
    }
}

function deleteNodeHtml()
{
    if(list.size()==0)
    {
        con.log("Linked List does not exist.")
    }
    else
    {
        data=list.remove()
        list.injectList("linkedList")
        con.log("Node deleted with data: "+data)
    }
}

