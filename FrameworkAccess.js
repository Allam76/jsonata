class FrameworkAccess{
    constructor(options){                      
    }  
    setFrameworkObject() {
    }

    clearReturncoll() {
        this.result_collection = {};

    }
    set_current_collection(iv_entity) {
      this.current_collection = iv_entity;
    }

    setStartCollection(iv_entity) {

        if(iv_entity){
            this.current_collection = iv_entity;
        } else{
            iv_entity = {};
            this.current_collection = [];
        }
    }

    getCurrentObject() {
       return this.current_object;
    }

    collIsInitial() {
        if(!this.current_collection || this.current_collection.length == 0){
            return true;
        } else {
            return false;
        }
    }

    copyStart2CurrentObject() {
        this.current_object = this.gr_startobject;
        this.gv_current_objectname = this.gv_startobjectname;
    }

    create_attrstruct_data(iv_attribute) {
        return {};
    }

    fill_attrstructdata() {
        return this.current_object;
    }

    set_1st_of_coll_as_current() {
        if(this.current_collection && this.current_collection.length > 0){
            this.current_object = this.current_collection[0];
        } else {
            this.current_object = null;
        }
    }

    currentobj_is_initial() {
        if(this.current_object == null){
            return true;
        } else {
            return false;
        }
    }

    get_current_coll_size() {
        if(this.current_collection){
            return this.current_collection.length;
        }else {
            return 0;
        }
    }

    get_current_coll() {
        return this.current_collection;
    }

    isObject(variable) {
        if( Object.prototype.toString.call( variable ) === '[object Object]' ) {
            return true;
        } else {
            return false;
        }
    }

    isArray(variable) {
        if( Object.prototype.toString.call( variable ) === '[object Array]' ) {
            return true;
        } else {
            return false;
        }
    }

    set_obj_by_index_as_current(input) {
      this.current_object = this.current_collection[input.iv_index - 1];
    }

    set_nextobj_as_current(iv_coll) {
      var newindex = 0;
      var lv_coll = {};
      this.current_object = null;

      if(iv_coll){
        if(!iv_coll.current_index) iv_coll.current_index = 1;
        lv_coll = iv_coll;
        newindex = lv_coll.current_index + 1;

        if(newindex > lv_coll.length){
          this.current_object =  null;
        }else{
          this.current_object = iv_coll[newindex-1];
          iv_coll.current_index ++;
        }
      }
    }

    currentobj_is_bound() {
        if(this.current_object){
            return true;
        } else {
            return false;
        }
    }

    getCurrentNamespace() {
        return this.gv_current_namespace;
    }

    getCurrentObjectname() {
        if(this.gv_current_objectname){
            return this.gv_current_objectname;
        } else{
            if(this.current_object){
                return this.current_object.constructor.name;
            } else {
                return this.gr_startobject.constructor.name;
            }
        }

    }

    get_framework_object() {

    }

    get_framework_runtime_object() {

    }

    set_framework_object(input) {

    }

    set_start_objectname(input) {
        this.gv_startobjectname = input.iv_name;
    }

    get_current_objectname() {
        return this.gv_current_objectname;
    }

    get_first_parent() {
      if(this.current_object && this.current_object.parent){
         return this.current_object.parent;
      }
    }

    get_next_parent() {
        return null;
    }

    get_first_relation() {
        if(this.current_object){
            return Object.keys(this.current_object)[];
        }
    }

    get_next_relation() {
      if(this.gv_current_objectname){
        if(this.metadata[this.gv_current_objectname]){
          var relations = this.metadata[this.gv_current_objectname].getRelations();
          if(relations){
            var relation = Object.keys(relations)[this.relationIndex];
            this.relationIndex ++;
            return relation;
          }
        }
      }
    }

    get_current_attributes() {
        var name = "";
      var attributes = [];
      if(this.gv_current_objectname){
        var name = this.gv_current_objectname;
        if(this.metadata[name]){
          var future = new Future();
          this.metadata[name].$$knex(this.metadata[name].tableName).columnInfo().then((columns)=>{
            for(var column in columns){
              attributes.push({name:column,type:"databaseField"});
            }
            for(var relation in this.metadata[name].getRelations()){
              attributes.push({name:relation,type:"databaseField"});
            }
            future.return(attributes);
          });
            return future.wait();
        }
      }
    }

    get_target_data(name) {
      if(this.target){
        if(name){
            if(!this.target.schema){
                this.target.schema = deref(this.getDatabaseSchema(this.target.database, name));
                return getFields(this.target.schema.properties); 
            } else {
                var schema = this.target.schema.items || this.target.schema;
                this.target.schema = schema.properties[name] || deref(this.getDatabaseSchema(this.target.database, name));
                return getFields(this.target.schema);
            } 
            
        } else {
            return this.target.list;
        }
      }  else {
          return {
                fieldname: name,
                type: "datafield"
            };
      }

    }
    get_first_target_data(name){
      this.target.schema = deref(this.getDatabaseSchema(this.target.database, name));
      return getFields(this.target.schema.properties);        
    } 
    get_target_schemas(){
        return this.target.list;
    }

    get_attr_type(attrname) {
      return "object";
    }

    set_current_objectname(iv_objectname) {
      this.gv_previous_objectname = this.gv_current_objectname;
      this.gv_current_objectname = iv_objectname;
    //	this.current_object = this.current_object[iv_objectname];
    }

    get_empty_copy_current_table() {
        return null;
    }

    set_curr_from_coll_to_current(iv_col) {
        var mycol = iv_col;
        this.current_object = Parser.prototype.readLine('index', mycol.current_index, mycol.objects);
    }

    get_current_namespace() {
        return this.gv_current_namespace;
    }

    set_current_namespace(iv_name) {
        this.gv_current_namespace = iv_name;
    }

    get_current_object() {
        return this.current_object;
    }

    set_current_object(object) {
        this.current_object = object;
    }
    get_current_attrstructname(){
        
    }   
}

function getFields(properties){
    if(properties){
        var props = properties.items ? properties.items.properties : properties;
        return _.map(props,(property, propName)=>{
            return {
                fieldname: propName,
                type: "datafield",
                fields: property ? getFields(property.properties): null
            };
        });
    }
}
function getSchemaNames(location){
    this.schemas = [];
    return _.map(fs.readdirSync(location),(fileName)=>{
        var schema = JSON.parse(fs.readFileSync(location + '/' + fileName, 'utf-8'));
        this.schemas.push(schema);
        return {
            fieldname: schema.title
        }
    });
}
module.exports = FrameworkAccess;