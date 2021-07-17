if [ -z "$1" ]
then
  echo "Please supply a subdomain to create a certificate for";
  echo "e.g. mysite.localhost"
  exit;
fi

if [ -f device.key ]; then
  KEY_OPT="-key"
else
  KEY_OPT="-keyout"
fi

DOMAIN=$1
COMMON_NAME=${2:-$1}

SUBJECT="/C=CA/ST=None/L=NB/O=None/CN=$COMMON_NAME"
NUM_OF_DAYS=999

openssl req -new -newkey rsa:2048 -sha256 -nodes $KEY_OPT device.key -subj "$SUBJECT" -out device.csr

cat v3.ext | sed s/%%DOMAIN%%/$COMMON_NAME/g > ./tmp/__v3.ext