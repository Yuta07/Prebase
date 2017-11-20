(function() { this.JST || (this.JST = {}); this.JST["ajv/lib/dot/propertyNames"] = {{# def.definitions }}
  {{# def.errors }}
  {{# def.setupKeyword }}
  {{# def.setupNextLevel }}
  
  {{? {{# def.nonEmptySchema:$schema }} }}
    {{
      $it.schema = $schema;
      $it.schemaPath = $schemaPath;
      $it.errSchemaPath = $errSchemaPath;
    }}
  
    {{
      var $key = 'key' + $lvl
        , $idx = 'idx' + $lvl
        , $i = 'i' + $lvl
        , $invalidName = '\' + ' + $key + ' + \''
        , $dataNxt = $it.dataLevel = it.dataLevel + 1
        , $nextData = 'data' + $dataNxt
        , $dataProperties = 'dataProperties' + $lvl
        , $ownProperties = it.opts.ownProperties
        , $currentBaseId = it.baseId;
    }}
  
    var {{=$errs}} = errors;
  
    {{? $ownProperties }}
      var {{=$dataProperties}} = undefined;
    {{?}}
    {{# def.iterateProperties }}
      var startErrs{{=$lvl}} = errors;
  
      {{ var $passData = $key; }}
      {{# def.setCompositeRule }}
      {{# def.generateSubschemaCode }}
      {{# def.optimizeValidate }}
      {{# def.resetCompositeRule }}
  
      if (!{{=$nextValid}}) {
        for (var {{=$i}}=startErrs{{=$lvl}}; {{=$i}}<errors; {{=$i}}++) {
          vErrors[{{=$i}}].propertyName = {{=$key}};
        }
        {{# def.extraError:'propertyNames' }}
        {{? $breakOnError }} break; {{?}}
      }
    }
  {{?}}
  
  {{? $breakOnError }}
    {{= $closingBraces }}
    if ({{=$errs}} == errors) {
  {{?}}
  
  {{# def.cleanUp }};
}).call(this);