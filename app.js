var fs = require('fs');
var convert = require('swiffy-convert');

var path = 'path/to/file.swf',
    buf  = fs.readFileSync(path),
    strm = fs.createReadStream(path);

// convert a file in a path
convert('path/to/file.swf', function(err, result) {
    if (err) return console.error(err);

    fs.writeFileSync('path/to/file.swf.html', result.output.html);
    fs.writeFileSync('path/to/file.swf.json', result.output.json);
    console.log(result);
  }
);

// convert a file, by its buffer
convert(buf, function(err, result) {
  if (err) return console.error(err);
  console.log(result);
});

// convert a file stream
convert(strm, function(err, result) {
  if (err) return console.error(err);
  console.log(result);
});
