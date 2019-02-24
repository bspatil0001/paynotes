let storage = Object.create(null);

function store() {
    let set = jest.fn((key) => {
        storage[key] = value;
    })

    let get = jest.fn((key) => {
        if (storage[key] != null) {
            return storage[key];
        }
    })
    return {
        set,
        get
    }
}