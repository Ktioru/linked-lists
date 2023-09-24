function linkedList() {
    
    this.list = [];
    function search(array, mainList = this.list) {
        if(array[1] == null) {
            array[1] = mainList.push(new node(value).value)
            return null
        } else if(typeof(array[1]) == "object") {
            return search(array[1])
        }
    }
    this.append = (value) => {
        console.log(this.list.length)
        if(this.list.length === 0) {
            this.list.push(new node(value).value)
        } else {
            
            let array = this.list[0]
            while(true) {
                if(array[1] == null) {
                    array[1] = new node(value).value
                    break
                } else if (typeof(array[1]) == "object") {
                    array = array[1]
                }
            }
        }
        
    }
    this.prepend = (value) => {
        const array = new node(value, this.list[0]).value
        this.list[0] = array
    }
    

}

function node(value, nextNode = null) {
    this.value = [value, nextNode]
}

const list = new linkedList()
list.append(12)
list.append(7)
list.append(15)
list.prepend(2)
list.prepend(2)
list.prepend(10)

console.log(list)