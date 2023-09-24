function linkedList() {
    
    this.list = [];
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
    this.size = () => {
        let array = this.list[0]
        let size = 1
        while(true) {
            if(array[1] == null) {
                break
            } else if (typeof(array[1]) == "object") {
                size++
                array = array[1]
            }
        }
        return size 
    }
    this.head = () => {
        return this.list[0]
    }
    this.tail = () => {
        let array = this.list[0]
        while(true) {
            if(array[1] == null) {
                return array
            } else if (typeof(array[1]) == "object") {
                array = array[1]
            }
        }
    }
    this.at = (index) => {
        let presentIndex = 1
        let array = this.list[0]
        while(true) {
            if(presentIndex == index) {
                return array
            } else if (typeof(array[1]) == "object") {
                presentIndex++
                array = array[1]
            }
        }
    }

}

function node(value, nextNode = null) {
    this.value = [value, nextNode]
}

const list = new linkedList()
list.append(12)
list.append(13)
list.append(14)
list.append(15)



console.log(list)
console.log(list.size())
console.log(list.head())
console.log(list.tail())
console.log(list.at(4))