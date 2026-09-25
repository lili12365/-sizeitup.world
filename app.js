function item(name, category, height, shape, compare, fact, source) {
  return { name, category, height, shape, compare, fact, source };
}

const objectBank = [
  item("Sesame seed", "Tiny things", .3, "coffee", "About the thickness of three stacked credit cards.", "Tiny food objects are useful for learning sub-centimeter scale.", "Common seed dimensions"),
  item("Grain of rice", "Tiny things", .7, "coffee", "About half the length of a coffee bean.", "A rice grain is a practical anchor for anything under 1 cm.", "Common long-grain rice length"),
  item("Coffee bean", "Tiny things", 1.1, "coffee", "About the height of a fingernail clipping.", "A roasted coffee bean is usually around 1 cm across, making it a good anchor for very small objects.", "Typical roasted coffee bean size"),
  item("Blueberry", "Tiny things", 1.5, "coffee", "About one and a half coffee beans.", "Small fruit is a good bridge between millimeter-scale and centimeter-scale objects.", "Common blueberry diameter"),
  item("Grape", "Tiny things", 2.2, "coffee", "About the width of a large coin.", "A grape gives you a quick 2 cm mental marker.", "Common table grape diameter"),
  item("Golf ball", "Sports", 4.3, "coffee", "A little larger than a spider leg span.", "A golf ball is a precise sport object and a good 4 cm anchor.", "Regulation golf ball diameter"),
  item("Female black widow spider", "Living things", 3.8, "spider", "A little wider than a large coin.", "Spiders are usually measured by body length or leg span. The leg span makes the object feel much larger than the body alone.", "Typical adult female leg span"),
  item("Jumping spider", "Living things", 1.8, "spider", "Close to the width of a grape.", "A spider can feel visually large because its legs spread beyond its body.", "Typical adult body and leg span range"),
  item("Housefly", "Living things", .8, "hummingbird", "About the length of a rice grain.", "Small insects are often under a centimeter, smaller than memory suggests.", "Typical housefly body length"),
  item("Honey bee", "Living things", 1.5, "hummingbird", "About the diameter of a blueberry.", "A honey bee is a useful living reference for the 1-2 cm range.", "Typical worker honey bee length"),
  item("Matchbox", "Everyday objects", 5, "door", "About the height of a golf ball plus a little extra.", "Small boxes are useful because they have straight edges and repeatable dimensions.", "Common pocket matchbox height"),
  item("Credit card", "Everyday objects", 5.4, "door", "About the short side of a standard bank card.", "The short side of a credit card is a reliable pocket-sized ruler.", "Standard ID-1 card size"),
  item("Hummingbird", "Living things", 8, "hummingbird", "About the length of a credit card's short side plus a finger width.", "Tiny birds are good reminders that a whole animal can fit inside a human palm.", "Common hummingbird body length"),
  item("Computer mouse", "Everyday objects", 11, "coffee", "About two credit-card short sides.", "Desk objects are useful anchors because many people handle them daily.", "Common computer mouse length"),
  item("Smartphone", "Everyday objects", 15, "door", "About three credit-card short sides.", "Phones are among the most familiar 15 cm rulers people carry.", "Typical modern smartphone height"),
  item("Pencil", "Everyday objects", 19, "racket", "A little shorter than a sheet of paper.", "A pencil is a simple anchor for the 20 cm range.", "Common pencil length"),
  item("Dinner plate", "Everyday objects", 27, "coffee", "About the shoulder height of a house cat.", "Plates make circular objects easier to estimate.", "Common dinner plate diameter"),
  item("House cat", "Living things", 25, "cat", "About the height of a sheet of A4 paper.", "For animals, shoulder height is the useful measurement. A cat's back is much lower than its full length.", "Average domestic cat shoulder height"),
  item("Basketball", "Sports", 24, "coffee", "About the height of a house cat's shoulder.", "A basketball is a reliable 24 cm round-object anchor.", "Regulation basketball diameter"),
  item("Soccer ball", "Sports", 22, "coffee", "A little smaller than a basketball.", "Ball diameters are good for practicing round-object scale.", "Regulation size 5 soccer ball diameter"),
  item("Skateboard deck", "Sports", 80, "racket", "About the height of a kitchen chair.", "Sports gear often sits between hand-scale and furniture-scale.", "Common skateboard length"),
  item("Tennis racket", "Sports", 69, "racket", "A little shorter than the width of a doorway.", "An adult racket is around 68-70 cm long, making it a useful half-meter-plus reference.", "Standard adult racket length"),
  item("Baseball bat", "Sports", 86, "racket", "About the height of a kitchen chair back.", "A bat is a strong one-meter-minus reference.", "Common adult baseball bat length"),
  item("Guitar", "Everyday objects", 100, "racket", "About half a standard door.", "A full-size guitar is close to one meter long.", "Common acoustic guitar length"),
  item("Violin", "Everyday objects", 60, "racket", "A little shorter than a tennis racket.", "Musical instruments provide memorable mid-size anchors.", "Full-size violin total length"),
  item("Kitchen chair", "Everyday objects", 85, "chair", "Just below the height of a kitchen counter.", "A standard seat is usually around 45 cm high; the full back of a dining chair often reaches 80-95 cm.", "Common furniture proportions"),
  item("Office desk", "Everyday objects", 74, "chair", "A little shorter than many chair backs.", "Most desks cluster around three-quarters of a meter high.", "Common desk height"),
  item("Kitchen counter", "Home scale", 91, "chair", "Just above a kitchen chair back.", "Counters are one of the most useful indoor height anchors.", "Common kitchen counter height"),
  item("Washing machine", "Home scale", 85, "washer", "Almost the same height as a kitchen chair back.", "Front-load washers are commonly around 85 cm high.", "Common appliance dimensions"),
  item("Dishwasher", "Home scale", 86, "washer", "Close to a washing machine height.", "Built-in appliances cluster near counter height.", "Common dishwasher dimensions"),
  item("Refrigerator", "Home scale", 178, "fridge", "Close to the height of many adults.", "Full-size refrigerators often land between 165 and 185 cm tall.", "Common appliance dimensions"),
  item("Microwave oven", "Home scale", 31, "washer", "A little taller than a dinner plate.", "Microwaves are small enough to be countertop scale, not furniture scale.", "Common countertop microwave height"),
  item("Toaster", "Home scale", 20, "washer", "About the length of a pencil.", "Small appliances are useful anchors for the 20 cm range.", "Common toaster height"),
  item("Standard door", "Everyday objects", 200, "door", "About the height of one tall adult lying down.", "Most interior doors are close to 2 m tall, one of the best visual anchors.", "Typical residential door dimensions"),
  item("Elevator door", "City scale", 210, "door", "A little taller than a standard door.", "Public doors often add extra clearance above typical residential doors.", "Common elevator entrance height"),
  item("Garage door", "Home scale", 213, "door", "A little taller than an elevator door.", "Garage doors are useful because the opening is often near 7 ft.", "Common residential garage door height"),
  item("Traffic cone", "City scale", 70, "cone", "About the length of an adult tennis racket.", "Large road cones are often 70-90 cm tall.", "Common road cone sizes"),
  item("Fire hydrant", "City scale", 75, "cone", "Around the height of a low chair back.", "Street fixtures often sit below waist height but above knee height.", "Typical hydrant height range"),
  item("Parking meter", "City scale", 140, "sign", "About two tennis rackets.", "Parking meters are close to chest height for easy visibility.", "Typical parking meter height"),
  item("Bus stop sign", "City scale", 240, "sign", "A little taller than a standard door.", "Street signs need clearance above pedestrian sightlines.", "Typical urban sign mounting height"),
  item("Stop sign", "City scale", 210, "sign", "About the height of an elevator door.", "Sign mounting height is a useful city-scale anchor.", "Typical roadside sign mounting height"),
  item("Street mailbox", "City scale", 115, "washer", "A little taller than a guitar.", "Public mailboxes are human-reachable but not table-height.", "Typical collection box height"),
  item("Bicycle", "Vehicles", 105, "racket", "A little taller than a grand piano body.", "A bicycle's handlebar height is close to a meter.", "Common adult bicycle handlebar height"),
  item("Motor scooter", "Vehicles", 115, "bus", "About the height of a street mailbox.", "Small vehicles are often waist-to-chest height.", "Typical scooter height"),
  item("Compact car", "Vehicles", 145, "bus", "A little taller than a parking meter.", "Car height is easy to underestimate because length dominates perception.", "Typical compact car height"),
  item("SUV", "Vehicles", 175, "bus", "Close to a refrigerator.", "SUVs sit near adult height, making them useful vehicle anchors.", "Typical SUV height"),
  item("Delivery van", "Vehicles", 250, "bus", "A little taller than a bus stop sign.", "Vans push from human scale into small-building scale.", "Typical delivery van height"),
  item("City bus", "Vehicles", 320, "bus", "A little taller than a basketball rim.", "Buses are a useful vehicle-scale anchor near low bridge clearances.", "Typical transit bus height"),
  item("Shipping container", "Industrial scale", 259, "bus", "A little taller than a delivery van.", "A standard container is close to 2.6 m high.", "Standard shipping container height"),
  item("Basketball hoop", "Sports", 305, "hoop", "About one and a half standard doors.", "Regulation rims are 3.05 m high, a fixed sports measurement.", "Regulation basketball rim height"),
  item("Soccer goal", "Sports", 244, "hoop", "A little taller than a bus stop sign.", "A full-size soccer goal is 8 ft high.", "Regulation soccer goal height"),
  item("Volleyball net", "Sports", 243, "hoop", "Almost the same as a soccer goal.", "Court equipment gives reliable fixed sport dimensions.", "Men's regulation volleyball net height"),
  item("Tennis net", "Sports", 107, "hoop", "A little taller than a bicycle handlebar.", "A tennis net is low compared with most people.", "Regulation tennis net post height"),
  item("Ping-pong table", "Sports", 76, "chair", "Close to a desk height.", "Table tennis tables are almost exactly three-quarters of a meter high.", "Regulation table tennis height"),
  item("Dog, Labrador", "Living things", 58, "cat", "A little shorter than a tennis racket.", "Medium dogs are often measured at the shoulder.", "Typical Labrador shoulder height"),
  item("Dog, Great Dane", "Living things", 80, "cat", "Close to a chair back.", "Very large dogs can be furniture-height at the shoulder.", "Typical Great Dane shoulder height"),
  item("Rabbit", "Living things", 20, "cat", "About the length of a pencil.", "Small mammals often sit in the 15-30 cm height range.", "Typical domestic rabbit height"),
  item("Chicken", "Living things", 40, "hummingbird", "About two smartphones stacked.", "Backyard birds are larger than many people expect.", "Typical chicken standing height"),
  item("Goose", "Living things", 90, "hummingbird", "Close to counter height.", "Large birds can be almost furniture-height when standing upright.", "Typical goose height"),
  item("Bald eagle", "Living things", 90, "hummingbird", "Around the height of a kitchen counter.", "Bird height is much smaller than wingspan, which can distort intuition.", "Typical standing bald eagle height"),
  item("Penguin", "Living things", 110, "hummingbird", "A little taller than a bicycle handlebar.", "Penguins provide a memorable one-meter animal anchor.", "Typical emperor penguin height"),
  item("Human adult", "Living things", 170, "giraffe", "A little shorter than a refrigerator.", "Human height is the default anchor most people use for scale.", "Common adult height reference"),
  item("Horse", "Living things", 160, "giraffe", "Close to adult human height at the shoulder.", "Horses are measured at the withers, not the head.", "Typical riding horse withers height"),
  item("Cow", "Living things", 145, "elephant", "About the height of a compact car.", "Large farm animals are often vehicle-height at the shoulder.", "Typical cow shoulder height"),
  item("Brown bear", "Living things", 150, "elephant", "Close to compact car height at the shoulder.", "Quadrupeds can be far longer than their standing height suggests.", "Typical shoulder height range"),
  item("Polar bear", "Living things", 160, "elephant", "Close to a horse at the shoulder.", "Standing posture can make bears feel much taller than shoulder height.", "Typical shoulder height range"),
  item("African elephant", "Living things", 330, "elephant", "About the height of a city bus.", "Elephants are measured at the shoulder, not the raised head or trunk.", "Typical adult African elephant shoulder height"),
  item("Giraffe", "Living things", 520, "giraffe", "More than two and a half standard doors.", "A giraffe is one of the easiest land animals to use as a five-meter anchor.", "Typical adult giraffe height"),
  item("Camel", "Living things", 210, "giraffe", "About an elevator door.", "Large animals often cluster around door height at the shoulder or hump.", "Typical camel shoulder and hump height"),
  item("Kangaroo", "Living things", 160, "giraffe", "Close to a tall refrigerator.", "Upright animals make height estimation easier than low quadrupeds.", "Typical large kangaroo height"),
  item("Alligator", "Living things", 360, "cat", "Longer than a city bus is tall.", "Long, low animals are a useful reminder that length and height feel different.", "Typical adult alligator length"),
  item("Great white shark", "Ocean scale", 500, "whale", "About the height of a giraffe if stood upright.", "Large fish lengths quickly move beyond land-animal height anchors.", "Typical adult great white length"),
  item("Dolphin", "Ocean scale", 250, "whale", "A little taller than a bus stop sign.", "Dolphins are longer than most household furniture is tall.", "Typical bottlenose dolphin length"),
  item("Humpback whale", "Ocean scale", 1500, "whale", "About five basketball rims laid end to end.", "Whales are usually described by body length; verticalizing it makes scale easier to feel.", "Typical adult humpback whale length"),
  item("Blue whale", "Ocean scale", 2500, "bluewhale", "Longer than twelve standard doors.", "The blue whale is the largest known animal, closer to aircraft scale than land-animal scale.", "Typical adult blue whale length"),
  item("Orca", "Ocean scale", 700, "whale", "A little taller than a street light.", "Orcas sit between boat-scale and building-scale in length.", "Typical adult orca length"),
  item("Giant squid", "Ocean scale", 1200, "whale", "About four basketball rims.", "Tentacled animals are often measured by total length, which can surprise the eye.", "Typical giant squid total length"),
  item("Oak sapling", "Natural scale", 180, "tree", "Close to a refrigerator.", "Young trees start at human scale before becoming building-scale.", "Common planted sapling height"),
  item("Small tree", "Natural scale", 280, "tree", "Just under one basketball rim.", "Young ornamental trees are often sold in the 2-3 m range.", "Common nursery tree sizes"),
  item("Apple tree", "Natural scale", 450, "tree", "A little shorter than a giraffe.", "Fruit trees often stay below large shade-tree scale.", "Common mature apple tree height"),
  item("Palm tree", "Natural scale", 1000, "tree", "About three city buses tall.", "Many palms move quickly from yard scale to building scale.", "Typical ornamental palm height"),
  item("Young redwood tree", "Natural scale", 1200, "redwood", "About four basketball rims stacked up.", "Even a young redwood can already be building-scale.", "Young planted redwood height range"),
  item("Mature redwood tree", "Natural scale", 8000, "redwood", "About thirty standard doors stacked.", "Mature redwoods break everyday intuition because they are true landmark-scale objects.", "Common mature coast redwood height range"),
  item("Street light", "City scale", 620, "light", "Roughly three stacked doors.", "Street lights vary by road and purpose; 6 m poles are common on smaller urban streets.", "Typical urban lighting ranges"),
  item("Utility pole", "City scale", 1100, "light", "About three and a half basketball rims.", "Utility poles are taller than street lights in many neighborhoods.", "Typical distribution pole height"),
  item("Two-story house", "Building scale", 700, "door", "A little taller than a street light.", "A two-story house is often in the 6-8 m range depending on roof form.", "Typical residential building height"),
  item("Basketball backboard", "Sports", 183, "hoop", "Almost the same as a refrigerator.", "The board itself is human-scale even though the rim is 3.05 m high.", "Regulation backboard width used as vertical size"),
  item("Grand piano", "Room scale", 100, "piano", "About half a standard door.", "Grand pianos are measured mainly by length, but their body height is close to a meter.", "Typical grand piano body height"),
  item("Upright piano", "Room scale", 125, "piano", "A little taller than a street mailbox.", "Upright pianos turn musical instruments into furniture-scale objects.", "Common upright piano height"),
  item("Bookshelf", "Room scale", 180, "door", "Close to a refrigerator.", "Tall furniture often clusters around adult height.", "Common tall bookshelf height"),
  item("Queen bed length", "Room scale", 203, "door", "About one standard door.", "Bed length is a surprisingly useful two-meter indoor anchor.", "Common queen mattress length"),
  item("Dining table", "Room scale", 76, "chair", "Close to ping-pong table height.", "Tables across different rooms often cluster near 75 cm.", "Common dining table height"),
  item("Sofa back", "Room scale", 85, "chair", "Close to a kitchen chair.", "Sofa backs make low furniture feel taller than the seat height.", "Common sofa back height"),
  item("Floor lamp", "Room scale", 160, "light", "Close to a horse shoulder height.", "Floor lamps are indoor versions of pole-scale objects.", "Common floor lamp height"),
  item("Human toddler", "Living things", 90, "giraffe", "About the height of a kitchen counter.", "Toddler height is a good anchor around one meter.", "Common toddler height range"),
  item("Newborn baby", "Living things", 50, "giraffe", "About two dinner plates.", "A newborn is close to half a meter long.", "Common newborn length"),
  item("Umbrella", "Everyday objects", 90, "racket", "About counter height when closed.", "Long handheld objects are useful one-meter anchors.", "Common full-size umbrella length"),
  item("Walking cane", "Everyday objects", 92, "racket", "Almost exactly kitchen-counter height.", "Canes are intentionally close to hand height for many adults.", "Common cane length"),
  item("Suitcase carry-on", "Everyday objects", 55, "washer", "A little shorter than a violin.", "Carry-on luggage is a reliable half-meter travel anchor.", "Common cabin suitcase height"),
  item("Large suitcase", "Everyday objects", 76, "washer", "Close to a dining table.", "Large luggage sits between hand-scale and furniture-scale.", "Common checked suitcase height"),
  item("Trash bin", "Everyday objects", 70, "washer", "About a traffic cone.", "Bins are a good anchor for knee-to-waist scale.", "Common household bin height"),
  item("Water bottle", "Everyday objects", 24, "coffee", "About a basketball diameter.", "A bottle is a familiar 20-30 cm desk object.", "Common reusable bottle height"),
  item("Wine bottle", "Everyday objects", 30, "coffee", "A little taller than a dinner plate.", "A standard wine bottle is a handy 30 cm anchor.", "Common wine bottle height"),
  item("Laptop screen", "Everyday objects", 22, "door", "About the diameter of a soccer ball.", "Laptop screens make portable rectangle sizes easy to remember.", "Common 13-inch laptop screen height"),
  item("Monitor", "Everyday objects", 37, "door", "A little shorter than a chicken.", "Desktop monitors are larger than laptops but still under half a meter tall.", "Common 24-inch monitor height"),
  item("Traffic barrier", "City scale", 81, "cone", "Close to a baseball bat.", "Road barriers often sit around waist height.", "Common plastic road barrier height"),
  item("Crosswalk signal", "City scale", 275, "sign", "A bit below a basketball rim.", "Signals are mounted high enough to clear pedestrians and parked vehicles.", "Typical pedestrian signal mounting height"),
  item("Billboard panel", "City scale", 420, "sign", "A little shorter than a giraffe.", "Billboards move visual design into building-scale dimensions.", "Common billboard panel height"),
  item("Small sailboat mast", "Vehicle scale", 900, "light", "About three basketball rims.", "Masts are a good way to connect vehicles to vertical landmark scale.", "Typical small sailboat mast height"),
  item("Semi-truck trailer", "Vehicles", 410, "bus", "Taller than an elephant shoulder.", "Truck trailers are close to maximum road-clearance scale.", "Typical semi-trailer height"),
  item("Airplane boarding door", "Vehicles", 190, "door", "Just under a standard door.", "Vehicle doors can be human-scale even on very large machines.", "Typical aircraft passenger door height"),
  item("Tyrannosaurus rex hip", "Prehistoric scale", 370, "giraffe", "A little taller than an elephant shoulder.", "Fossil animals are easier to grasp when compared at hip or shoulder height.", "Typical reconstructed hip height"),
  item("Stegosaurus", "Prehistoric scale", 400, "elephant", "About the height of a semi-truck trailer.", "Dinosaurs vary wildly; height and length tell different stories.", "Typical reconstructed height"),
  item("Brachiosaurus", "Prehistoric scale", 1200, "giraffe", "About the height of a young redwood.", "Sauropods push animal scale into small-building scale.", "Typical reconstructed height"),
  item("Ping-pong paddle", "Sports", 25, "racket", "About a house cat's shoulder height.", "Small sports tools can become quick centimeter anchors.", "Common paddle length"),
  item("Surfboard", "Sports", 210, "racket", "About an elevator door.", "Boards are easier to estimate as length rather than thickness.", "Common shortboard to funboard length"),
  item("Kayak", "Sports", 300, "whale", "Almost one basketball rim.", "Small boats bridge human scale and vehicle scale.", "Common recreational kayak length"),
  item("Canoe", "Sports", 480, "whale", "Almost a giraffe laid flat.", "Long narrow objects are often underestimated when viewed from the side.", "Common canoe length"),
  item("Garden shovel", "Everyday objects", 120, "racket", "About an upright piano.", "Long tools make useful one-meter-plus anchors.", "Common shovel length"),
  item("Broom", "Everyday objects", 135, "racket", "About a parking meter.", "Household tools often cluster between 1.2 and 1.5 m.", "Common broom length"),
  item("Christmas tree", "Room scale", 210, "tree", "About an elevator door.", "Indoor trees are chosen to fit standard ceiling heights.", "Common indoor tree height"),
  item("Tent", "Outdoor scale", 130, "door", "A little taller than an upright piano.", "Small tents are low because sleeping space matters more than standing space.", "Common camping tent height"),
  item("Picnic table", "Outdoor scale", 75, "chair", "Close to a dining table.", "Outdoor tables follow the same human ergonomics as indoor tables.", "Common picnic table height")
];

const shapeLibrary = {
  coffee: `<svg class="shape-svg coffee-svg" viewBox="0 0 120 180" aria-hidden="true"><ellipse cx="60" cy="90" rx="42" ry="70"/><path d="M58 21c-23 28-20 47 1 69 20 22 19 43-1 69" fill="none" stroke="var(--paper)" stroke-width="10" stroke-linecap="round"/></svg>`,
  spider: `<svg class="shape-svg spider-svg" viewBox="0 0 180 180" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round"><path d="M82 90C50 58 28 55 12 75"/><path d="M82 97C45 92 24 104 12 127"/><path d="M83 104C50 128 45 151 61 166"/><path d="M98 90c32-32 54-35 70-15"/><path d="M98 97c37-5 58 7 70 30"/><path d="M97 104c33 24 38 47 22 62"/></g><ellipse cx="72" cy="96" rx="30" ry="25"/><ellipse cx="103" cy="94" rx="18" ry="18"/></svg>`,
  hummingbird: `<svg class="shape-svg bird-svg" viewBox="0 0 190 170" aria-hidden="true"><path d="M77 88c31-28 66-23 84 13-37 1-61 16-84-13Z"/><path d="M74 87C50 54 26 43 8 33c15 42 35 63 66 54Z" opacity=".78"/><path d="M79 91c-29 8-48 21-65 45 33-1 57-15 65-45Z" opacity=".72"/><circle cx="150" cy="90" r="16"/><path d="M164 88l23-9-21 18Z"/><path d="M55 101l-30 16 26-3Z"/></svg>`,
  cat: `<svg class="shape-svg cat-svg" viewBox="0 0 190 140" aria-hidden="true"><path d="M35 87c9-33 43-48 87-36 20 5 34 21 33 39-2 24-31 35-70 34-37-1-56-12-50-37Z"/><path d="M132 52l9-27 15 26 20 4-12 15c-17-5-20-8-32-18Z"/><path d="M39 83C18 76 8 60 14 44c19 10 30 23 36 43Z"/><rect x="61" y="103" width="13" height="32" rx="5"/><rect x="119" y="101" width="13" height="34" rx="5"/></svg>`,
  racket: `<svg class="shape-svg racket-svg" viewBox="0 0 140 200" aria-hidden="true"><ellipse cx="70" cy="58" rx="42" ry="52" fill="none" stroke="currentColor" stroke-width="16"/><g stroke="currentColor" stroke-width="3" opacity=".45"><path d="M42 31h56M35 58h70M42 86h56M70 8v100M53 17l34 83M87 17l-34 83"/></g><rect x="61" y="105" width="18" height="88" rx="9" transform="rotate(-8 70 149)"/></svg>`,
  chair: `<svg class="shape-svg chair-svg" viewBox="0 0 160 180" aria-hidden="true"><rect x="45" y="18" width="70" height="82" rx="10"/><rect x="32" y="90" width="96" height="28" rx="10"/><rect x="43" y="112" width="13" height="58" rx="6"/><rect x="105" y="112" width="13" height="58" rx="6"/></svg>`,
  door: `<svg class="shape-svg door-svg" viewBox="0 0 120 200" aria-hidden="true"><rect x="22" y="6" width="76" height="188" rx="7"/><circle cx="82" cy="102" r="6" fill="var(--lime)"/><path d="M34 22h52v156H34Z" fill="none" stroke="rgba(255,255,255,.18)" stroke-width="4"/></svg>`,
  hoop: `<svg class="shape-svg hoop-svg" viewBox="0 0 150 210" aria-hidden="true"><rect x="95" y="22" width="14" height="178" rx="7"/><rect x="28" y="24" width="70" height="55" rx="6" fill="none" stroke="currentColor" stroke-width="10"/><ellipse cx="63" cy="90" rx="28" ry="7"/><path d="M42 95l8 32M84 95l-8 32M56 96l2 35M70 96l-2 35" fill="none" stroke="currentColor" stroke-width="3" opacity=".55"/></svg>`,
  bus: `<svg class="shape-svg bus-svg" viewBox="0 0 210 130" aria-hidden="true"><rect x="12" y="27" width="186" height="74" rx="14"/><rect x="27" y="39" width="40" height="28" rx="4" fill="var(--paper)" opacity=".75"/><rect x="75" y="39" width="40" height="28" rx="4" fill="var(--paper)" opacity=".75"/><rect x="123" y="39" width="40" height="28" rx="4" fill="var(--paper)" opacity=".75"/><circle cx="55" cy="104" r="17"/><circle cx="160" cy="104" r="17"/></svg>`,
  elephant: `<svg class="shape-svg elephant-svg" viewBox="0 0 230 170" aria-hidden="true"><ellipse cx="103" cy="91" rx="72" ry="49"/><circle cx="171" cy="79" r="36"/><path d="M194 91c25 25 20 48 1 61-5-18-3-37-16-51Z"/><path d="M145 74c-5 20-22 32-41 29 4-23 20-34 41-29Z" fill="var(--paper)" opacity=".34"/><rect x="61" y="121" width="18" height="42" rx="7"/><rect x="130" y="121" width="18" height="42" rx="7"/><path d="M31 81C8 69 12 52 30 48c10 14 13 24 1 33Z"/></svg>`,
  giraffe: `<svg class="shape-svg giraffe-svg" viewBox="0 0 180 230" aria-hidden="true"><ellipse cx="77" cy="165" rx="52" ry="30"/><rect x="104" y="51" width="24" height="113" rx="12"/><ellipse cx="119" cy="44" rx="27" ry="18"/><path d="M105 27l-8-19M128 27l8-19" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round"/><rect x="45" y="184" width="13" height="40" rx="6"/><rect x="100" y="184" width="13" height="40" rx="6"/><g fill="var(--paper)" opacity=".3"><circle cx="73" cy="158" r="8"/><circle cx="102" cy="169" r="7"/><circle cx="114" cy="91" r="6"/><circle cx="118" cy="130" r="7"/></g></svg>`,
  light: `<svg class="shape-svg light-svg" viewBox="0 0 150 220" aria-hidden="true"><rect x="68" y="33" width="15" height="176" rx="8"/><path d="M75 36c19-22 41-23 62-8" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round"/><path d="M110 31h33v22h-33z"/><path d="M113 54h26l-8 20h-10Z" opacity=".72"/></svg>`,
  washer: `<svg class="shape-svg washer-svg" viewBox="0 0 150 170" aria-hidden="true"><rect x="29" y="15" width="92" height="140" rx="13"/><circle cx="75" cy="91" r="34" fill="var(--paper)" opacity=".28"/><circle cx="75" cy="91" r="22" fill="none" stroke="currentColor" stroke-width="7" opacity=".55"/><rect x="43" y="31" width="28" height="8" rx="4" fill="var(--paper)" opacity=".55"/><rect x="88" y="30" width="18" height="10" rx="5" fill="var(--lime)"/></svg>`,
  fridge: `<svg class="shape-svg fridge-svg" viewBox="0 0 140 210" aria-hidden="true"><rect x="32" y="8" width="76" height="194" rx="10"/><path d="M33 88h74" fill="none" stroke="var(--paper)" stroke-width="5" opacity=".35"/><rect x="88" y="31" width="6" height="47" rx="3" fill="var(--lime)"/><rect x="88" y="109" width="6" height="61" rx="3" fill="var(--lime)"/></svg>`,
  cone: `<svg class="shape-svg cone-svg" viewBox="0 0 150 170" aria-hidden="true"><path d="M75 12 112 136H38Z"/><rect x="20" y="132" width="110" height="24" rx="8"/><path d="M55 74h40M45 110h60" fill="none" stroke="var(--paper)" stroke-width="9" opacity=".35"/></svg>`,
  sign: `<svg class="shape-svg sign-svg" viewBox="0 0 170 210" aria-hidden="true"><rect x="78" y="73" width="14" height="126" rx="7"/><rect x="34" y="22" width="102" height="65" rx="10"/><path d="M55 45h60M55 64h43" fill="none" stroke="var(--paper)" stroke-width="8" stroke-linecap="round" opacity=".45"/></svg>`,
  tree: `<svg class="shape-svg tree-svg" viewBox="0 0 180 220" aria-hidden="true"><rect x="78" y="128" width="24" height="82" rx="9" fill="var(--green-dark)" opacity=".75"/><circle cx="90" cy="71" r="53"/><circle cx="54" cy="103" r="38"/><circle cx="126" cy="104" r="40"/><circle cx="90" cy="120" r="43"/></svg>`,
  piano: `<svg class="shape-svg piano-svg" viewBox="0 0 210 150" aria-hidden="true"><path d="M24 73c8-43 54-62 125-48 29 6 47 22 42 44-6 28-42 43-92 42-52-1-81-14-75-38Z"/><rect x="49" y="103" width="16" height="40" rx="6"/><rect x="145" y="100" width="16" height="43" rx="6"/><path d="M67 72h92" fill="none" stroke="var(--paper)" stroke-width="8" opacity=".34"/></svg>`,
  redwood: `<svg class="shape-svg redwood-svg" viewBox="0 0 180 240" aria-hidden="true"><path d="M90 5L28 142h35L38 191h35l-14 38h62l-14-38h35l-25-49h35Z"/><rect x="78" y="178" width="24" height="58" rx="8" fill="var(--green-dark)" opacity=".7"/></svg>`,
  whale: `<svg class="shape-svg whale-svg" viewBox="0 0 260 120" aria-hidden="true"><path d="M25 70c36-47 129-56 190-13 14 10 23 7 39-8-4 25-18 39-43 43-61 26-147 19-186-22Z"/><path d="M66 51c27-42 64-49 99-37-22 8-44 25-61 47Z" opacity=".65"/><circle cx="197" cy="58" r="4" fill="var(--paper)"/></svg>`,
  bluewhale: `<svg class="shape-svg bluewhale-svg" viewBox="0 0 300 120" aria-hidden="true"><path d="M20 68c52-49 178-57 244-7 12 9 21 7 34-7-2 28-23 42-54 44C170 126 62 111 20 68Z"/><path d="M73 53c38-36 86-47 142-34-42 8-81 26-111 50Z" opacity=".55"/><path d="M70 83c42 14 94 18 154 6" fill="none" stroke="var(--paper)" stroke-width="4" opacity=".32"/></svg>`
};

const state = { mode: "daily", round: 0, guess: 176, submitted: false, score: 0, sound: true };
const $ = (selector) => document.querySelector(selector);
const slider = $("#sizeSlider");
const referenceSilhouette = $("#referenceSilhouette");
const guessSilhouette = $("#guessSilhouette");
const objectName = $("#objectName");
const categoryLabel = $("#categoryLabel");
const referenceHeight = $("#referenceHeight");
const guessHeight = $("#guessHeight");
const accuracyChip = $("#accuracyChip");
const feedback = $("#feedback");
const submitButton = $("#submitButton");

function todayKey(date = new Date()) {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

function seededShuffle(items, seedText) {
  let seed = Array.from(seedText).reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const list = [...items];
  for (let index = list.length - 1; index > 0; index -= 1) {
    seed = (seed * 9301 + 49297) % 233280;
    const swapIndex = Math.floor((seed / 233280) * (index + 1));
    [list[index], list[swapIndex]] = [list[swapIndex], list[index]];
  }
  return list;
}

function dailyObjects() {
  return seededShuffle(objectBank, todayKey()).slice(0, 5);
}

function activeObjects() {
  return state.mode === "daily" ? dailyObjects() : objectBank;
}

function currentObject() {
  return activeObjects()[state.round % activeObjects().length];
}

function formatCm(value) {
  return value < 10 ? `${value.toFixed(1)} cm` : `${Math.round(value)} cm`;
}

function renderDots() {
  $("#roundDots").innerHTML = Array.from({ length: 5 }, (_, index) => {
    const stateClass = index < state.round ? "done" : index === state.round ? "active" : "";
    return `<span class="round-dot ${stateClass}"></span>`;
  }).join("");
}

function renderShape(object) {
  referenceSilhouette.className = `silhouette svg-shape ${object.shape}`;
  guessSilhouette.className = `silhouette svg-shape ${object.shape}`;
  referenceSilhouette.innerHTML = shapeLibrary[object.shape] || shapeLibrary.door;
  guessSilhouette.innerHTML = shapeLibrary[object.shape] || shapeLibrary.door;
  referenceSilhouette.style.height = "190px";
  guessSilhouette.style.height = "167px";
}

function renderObject() {
  const object = currentObject();
  objectName.textContent = object.name;
  categoryLabel.textContent = `${object.category} · ${state.mode === "daily" ? todayKey() : "full library"}`;
  referenceHeight.textContent = formatCm(object.height);
  $("#roundLabel").textContent = `Question ${String(state.round + 1).padStart(2, "0")}`;
  $("#categoryButtonText").textContent = object.category.split(" ")[0];
  renderShape(object);
  slider.min = object.height < 40 ? Math.max(.5, Math.floor(object.height * .15)) : 40;
  slider.step = object.height < 10 ? .1 : 1;
  slider.max = Math.ceil((object.height > 320 ? object.height * 1.3 : 320) / 10) * 10;
  const initialGuess = Math.max(Number(slider.min), Math.round(object.height * .82 * 10) / 10);
  state.guess = Math.min(Number(slider.max), initialGuess);
  slider.value = state.guess;
  $("#scaleMin").textContent = formatCm(Number(slider.min));
  $("#scaleMid").textContent = formatCm(Number(slider.max) / 2);
  $("#scaleMax").textContent = formatCm(Number(slider.max));
  state.submitted = false;
  submitButton.disabled = false;
  submitButton.style.opacity = "1";
  $("#submitText").textContent = "Lock in guess";
  feedback.textContent = "";
  feedback.className = "feedback";
  $("#learningPanel").classList.add("hidden");
  renderDots();
  updateGuess();
}

function updateGuess() {
  state.guess = Number(slider.value);
  guessHeight.textContent = state.guess < 10 ? state.guess.toFixed(1) : Math.round(state.guess);
  const scale = Math.max(.12, Math.min(1.9, state.guess / currentObject().height));
  guessSilhouette.style.height = `${Math.round(190 * scale)}px`;
  const object = currentObject();
  const percent = Math.max(0, Math.round(100 - Math.abs(state.guess - object.height) / object.height * 100));
  accuracyChip.textContent = state.submitted ? `${percent}%` : "--%";
  const fill = Math.max(3, Math.min(100, state.guess / Number(slider.max) * 100));
  slider.style.background = `linear-gradient(90deg, var(--green) 0%, var(--green) ${fill}%, #c9ddc6 ${fill}%, #c9ddc6 100%)`;
}

function submitGuess() {
  if (state.submitted) {
    if (state.round >= 4 || state.mode === "practice") {
      if (state.mode === "daily") {
        $("#scoreValue").textContent = `${state.score}`;
        state.score = 0;
        state.round = 0;
      } else {
        state.round = (state.round + 1) % objectBank.length;
      }
      renderObject();
      return;
    }
    state.round += 1;
    renderObject();
    return;
  }
  const object = currentObject();
  const distance = Math.abs(state.guess - object.height);
  const percent = Math.max(0, Math.round(100 - distance / object.height * 100));
  const points = Math.round(percent * 10);
  state.score += points;
  state.submitted = true;
  accuracyChip.textContent = `${percent}%`;
  $("#submitText").textContent = state.round >= 4 && state.mode === "daily" ? "Play again" : "Next object";
  feedback.innerHTML = `<strong>${percent}% accurate</strong><span>+${points} points</span><span>Actual: ${formatCm(object.height)}</span>`;
  feedback.className = `feedback ${percent >= 80 ? "good" : "low"}`;
  showLearning(object, percent);
  renderDots();
}

function showLearning(object, percent) {
  $("#learningPanel").classList.remove("hidden");
  $("#learningCompare").textContent = object.compare;
  $("#learningFact").textContent = object.fact;
  $("#learningSource").textContent = object.source;
  $("#errorMessage").textContent = percent >= 90
    ? "Excellent calibration. Your mental reference was very close."
    : percent >= 70
      ? "A useful estimate. Keep this comparison as your new visual anchor."
      : "Your eye was off, which is useful data. Notice the gap before the next question.";
}

function setView(view) {
  const target = $(`#${view}View`);
  if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  ["play", "how", "about"].forEach((name) => {
    document.querySelector(`[data-view="${name}"]`).classList.toggle("active", view === name);
  });
}

slider.addEventListener("input", updateGuess);
submitButton.addEventListener("click", submitGuess);
$("#categoryButton").addEventListener("click", () => {
  state.round = (state.round + 1) % activeObjects().length;
  renderObject();
});
document.querySelectorAll("[data-mode]").forEach((button) => button.addEventListener("click", () => {
  state.mode = button.dataset.mode;
  document.querySelectorAll("[data-mode]").forEach((item) => item.classList.toggle("active", item === button));
  state.round = 0;
  state.score = 0;
  $("#scoreValue").textContent = "-";
  renderObject();
}));
document.querySelectorAll("[data-view]").forEach((button) => button.addEventListener("click", () => setView(button.dataset.view)));
$("#soundToggle").addEventListener("click", () => {
  state.sound = !state.sound;
  $("#soundToggle").classList.toggle("muted", !state.sound);
});
window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    event.preventDefault();
    const change = event.key === "ArrowLeft" ? -Number(slider.step) : Number(slider.step);
    slider.value = Number(slider.value) + change;
    updateGuess();
  }
  if (event.key === "Enter" && document.activeElement !== slider) submitGuess();
});

renderObject();
