const { program } = require("commander");
const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} = require("./contacts");

program
  .option("-a, --action <type>")
  .option("-i, --id <type>")
  .option("-n, --name <type>")
  .option("-e, --email <type>")
  .option("-p, --phone <type>");

program.parse();

const options = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await listContacts();
      console.table(allContacts);
      break;
    case "get":
      const findContact = await getContactById(id);
      console.table(findContact);
      break;
    case "add":
      const newContact = await addContact(name, email, phone);
      console.table(newContact);
      break;
    case "remove":
      const delContact = await removeContact(id);
      console.table(delContact);
      break;
    default:
      console.log("Undefiend");
  }
};

invokeAction(options);
