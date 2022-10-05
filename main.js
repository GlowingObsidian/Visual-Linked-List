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
    }

    this.injectList = function(id)
    {
        start=`<i class="bi bi-record-circle"></i>
                <i class="bi bi-arrow-right"></i>`
        end=`<i class="bi bi-x-circle"></i>`

        var htmlNode = function(data)
        {
            return `<div class="node" id="node">
                ${data}
            </div>
            <i class="bi bi-arrow-right"></i>`
        }

        var htmlNodeHighlighted = function(data)
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

var list = new LinkedList()
list.injectList("linkedList")

function insertNodeHtml()
{

    data=document.getElementById("input_data").value
    document.getElementById("input_data").value=''
    if(data[0]===' ' || data==='')
    {

    }
    else
    {
        list.add(data)
    }
    list.injectList("linkedList")
}

function emptyList()
{
    list.empty()
    list.injectList("linkedList")
}

