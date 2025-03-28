#include<iostream>
using namespace std;

class Customer {

    string name;
    int *data;

    public:
    Customer(){

        name = "Sanyogita";
        data = new int;
        *data = 10;
        cout<<"constructor is called\n";
    }
    ~Customer(){

        delete data;
    cout<<"destructor is called\n";
 }
};
int main(){
    Customer A1;
}