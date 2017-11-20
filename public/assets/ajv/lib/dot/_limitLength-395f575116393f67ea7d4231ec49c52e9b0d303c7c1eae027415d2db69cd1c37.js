(function() { this.JST || (this.JST = {}); this.JST["ajv/lib/dot/_limitLength"] = {{# def.definitions }}
  {{# def.errors }}
  {{# def.setupKeyword }}
  {{# def.$data }}
  
  {{ var $op = $keyword == 'maxLength' ? '>' : '<'; }}
  if ({{# def.$dataNotType:'number' }} {{# def.strLength }} {{=$op}} {{=$schemaValue}}) {
    {{ var $errorKeyword = $keyword; }}
    {{# def.error:'_limitLength' }}
  } {{? $breakOnError }} else { {{?}};
}).call(this);