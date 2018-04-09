// Define the database as an object
const HomeInventoryDatabase = {
    furniture: [],
    crafts: [],
    electronics: []
}

// Craft data items
const vintageMacrameHang = {
    name: "Vintage Macrame Plant Hanger",
    location: "Living Room",
    description: "The macrame plant hanger is dark green and seems to be from the 1970's. It was found in ana antique store and is currently holding one of my favorite plants."
}

const sewingMachine = {
    name: "Sewing Machine",
    location: "Guest Bedroom",
    description: "My mother gave me a simple sewing machine years ago for Christmas. I use it often making crafts and fixing pieces to reuse, recycle, reduce."
}

const yarn = {
    name: "Yarn",
    location: "Guest Bedroom",
    description: "Yarn to make a number of items."
}

const needles = {
    name: "Needles",
    location: "Guest Bedroom",
    description: "Needles to use for knitting, crocheting and sewing. Can never have too many."
}

const fabric = {
    name: "Fabric",
    location: "Guest Bedroom",
    description: "Fabric to make the many pieces of clothing I don't wear."
}

// Furniture data items
const vintagePeacockChair = {
    name: "Peacock Chair",
    location: "Living room",
    description: "My vintage peacock chair is only aobut 4 foot tall. It is beautifly painted but is chipping and may need to be fixed."
}

const tvStand = {
    name: "TV Stand",
    location: "Living room",
    description: "The tv stand is a media console that my husband put together. "
  }

const dinningRoomTable = {
    name: "Dinning Room Table",
    location: "Dinning room",
    description: "A table that my husband and I built many years ago at his grandfather's house."
  }

const lockers = {
    name: "Lockers",
    location: "Dinning room",
    description: "We have a set of 6 lockers located in our dinningroom, perfect to place our backpacks and coats in after a long day."
  }

const dinningRoomChairs = {
    name: "Dinning Room Chairs",
    location: "Dinning room",
    description: "Our dinning room chairs were an accidently order on Amazon. They are white with wood legs but I love them."
  }

// Electronics data items

const tv = {
    name: "TV",
    location: "Living room",
    description: "We have one tv in our home, in the livingroom and do our best not to turn it on if possible."
  }

const recordPlayer = {
    name: "Record Player",
    location: "Dinning room",
    description: "The record player is a new electronic designed to look vintage. It does play our many vintage records!"
  }

const oven = {
    name: "Oven",
    location: "Kitchen",
    description: "We eat at home most of our meals so our oven gets a lot of use."
  }

const blender = {
    name: "Blender",
    location: "Kitchen",
    description: "I love a good smoothie and my little blender does all the hard work."
  }

const essentialOilDiffuser = {
    name: "Essential Oil Diffuser",
    location: "Bedroom",
    description: "This diffuser is magic."
  }

  console.log(HomeInventoryDatabase.furniture);
  console.log(HomeInventoryDatabase.crafts);
  console.log(HomeInventoryDatabase.electronics)

// Adding each function to database

HomeInventoryDatabase.crafts.push(vintageMacrameHang, sewingMachine, yarn, needles, fabric)
HomeInventoryDatabase.furniture.push(vintagePeacockChair, tvStand, dinningRoomTable, lockers, dinningRoomChairs)
HomeInventoryDatabase.electronics.push(tv, recordPlayer, oven, blender, essentialOilDiffuser)
 
const saveDatabase = function (databaseObject, localStorageKey) {
    /*
        Convert the Object into a string.
    */
    const stringifiedDatabase = JSON.stringify(databaseObject)
    /*
        Create a key in local storage, and store the string
        version of your inventory database as the value
    */
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}

const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)
    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}

saveDatabase(HomeInventoryDatabase, "HomeInventory")

